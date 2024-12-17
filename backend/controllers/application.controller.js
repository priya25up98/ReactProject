
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";



export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        // const { id: jobId } = req.params;
        const jobId = req.params.id;
        if (!jobId) {
            return res.status(400).json({
                messgae: "job is required. ",
                success: false
            })
        };
        //check if user alredy applied for the job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId })

        if (existingApplication) {
            return res.status(400).json({
                message: "You have already applied for this jobs ",
                success: false
            });

        }
        //check if the job exists 
        const job = await Job.findById(jobId)
        if (!job) {
            return res.status(404).json({
                messgae: "Job not found ",
                success: false
            })
        }
        //cretae new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,

        })
        job.applications.push(newApplication._id)
        await job.save();
        return res.status(201).json(
            {
                messgae: "job applied successfully",
                success: true
            }
        )
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error",
            success: false
        })
    }
}
//no of applied job get details show karega
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        }
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createAt: -1 });
        if (!jobs) {
            return res.status(404).json({
                message: "jobs not found",
                success: false
            })
        }
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error",
            success: false
        })
    }
}
export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } }
            }
        })
        if (!application) {
            return res.status(404).json({
                message: 'no application',
                success: false
            })
        }
        return res.status(200).json({
            application,
            success: true
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error",
            success: false
        })
    }
}
//admin dekhneg  kitna user ne apply kiya

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        });
        if (!job) {
            return res.status(404).json({
                message: "job not found",
                success: false
            })
        };
        return res.status(200).json({
            job,
            success: true
        });
    } catch (error) {
        console.log(error)
    }
}


//update stautus accecept hua ye reject
export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const applicationId = req.params.id;
        if (!status) {
            return res.status(400).json({
                message: "status is required",
                success: false
            })
        }
        //find the application by applicantion id 
        const application = await Application.findOne({ _id: applicationId })
        if (!application) {
            return res.status(404).json({
                message: "Application is not found",
                success: false
            })
        };
        //update the status
        application.status = status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message: 'status upadetd succesfully.',
            success: true
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "internal server error",
            success: false
        })
    }
}