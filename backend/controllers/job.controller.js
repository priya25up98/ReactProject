import multer from 'multer'
import path from 'path';
import fs from 'fs';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (fs.existsSync('./uploads')) {
            cb(null, './uploads')
        } else {
            fs.mkdirSync("./uploads")
            cb(null, './uploads')
        }
    },
    filename: function (req, file, cb) {
        const orgName = file.originalname;
        const fname = path.parse(orgName).name
        const ext = path.parse(orgName).ext;
        const uniqueValue = Date.now();
        const filename = fname + '-' + uniqueValue + ext
        cb(null, filename)
    }
})

const upload = multer({ storage: storage })

export const addstd = async (req, res) => {
    try {
        const uploadDataWithFile = upload.single("profile")

        uploadDataWithFile(req, res, async (err) => {
            if (err) return res.status(400).json({ message: err.message, success: false });
            console.log('body', req.body)
            console.log("file not fetched")
            console.log('file', req.file)

            let img = null;
            if (req.file) {
                img = req.file.filename

            }
            const { name, email, password, contact, skills } = req.body;
            console.log("datdatdatdatda", req.body);
            const created = await Studentdata.create({
                name: name,
                email: email,
                password: password,
                contact: contact,
                image: img,
                skills: skills,
            })
            return res.status(200).json({
                data: created,
                message: "student data cretaed",
                success: true
            })
        })
    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}