// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';
import bcrypt from "bcryptjs";
import userModel from '../models/user.model';
import jwt from "jsonwebtoken";


// register
export const register = async (req, res) => {
    try {
        const { name, email, contact, password, role } = req.body;
        const existUser = await userModel.findOne({ email: email });
        if (existUser) {
            return res.status(400).json({
                message: "User already exist",
                success: false
            })
        }
        const hashPassword = bcrypt.hashSync(password, 12);

        const saveuser = await userModel.create({
            name: name,
            email: email,
            contact: contact,
            password: hashPassword,
            role: role,
        })
        console.log(hashPassword)

        return res.status(201).json({
            data: saveuser,
            messgae: "Signup successfull",
            success: true
        })

    } catch (err) {
        return res.status(500).json({
            message: err.message,
            success: false
        })
    }
}

//Login

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const existUser = await userModel.findOne({ email: email })
        if (!existUser) {
            return res.status(400).json({
                message: "user dosent exist",
                success: false
            })
        }

        const match = await bcrypt.compare(password, existUser.password)
        if (!match) {
            return res.status(400).json({
                message: "Invalid credential",
                success: false
            })
        }

        const token = jwt.sign({
            data: { id: existUser._id }
        }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" })

        const userdata = await userModel.findOne({ email }).select('-password');
        return res.status(200).json({
            data: userdata,
            token,
            message: 'successfull login',
            success: true
        })


    } catch (err) {
        return res.status(500).json({
            messgae: err.message,
            success: false
        })
    }
}



export const addUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, contact, password, role } = req.body;

        const created = await userModel.create({
            name: name,
            email: email,
            contact: contact,
            password: password,
            role: role
        });
        return res.status(200).json({
            data: created,
            massage: "User Data Added",
            success: true
        })

    } catch (err) {
        return res.status(500).json({ message: err.massage, success: false });
    }
}

export const getUsers = async (req, res) => {
    try {
        const userdata = await userModel.find();
        return res.status(200).json({
            data: userdata,
            massage: "User Fetched",
            success: true
        });
    } catch (err) {
        return res.status(500).json({ message: err.massage, success: false });
    }
}

export const getUser = async (req, res) => {
    //single user we can get thorugh single userid
    try {
        const userid = req.params.user_id;
        //    console.log('test',userid)
        const userData = await userModel.findOne({ _id: userid })
        if (userData) {
            return res.status(200).json({
                data: userData,
                massage: "user Fetched",
                success: true,
            })
        }
        return res.status(400).json({
            message: "Something went wrong!",
            success: false
        })

    } catch (error) {
        return res.status(500).json({ massage: error.massage, success: false })
    }

}

export const updateUser = async (req, res) => {

    try {
        const userid = req.params.user_id
        const { name, email, contact, password, role } = req.body
        const updateUser = await userModel.updateOne({ _id: userid }, {
            $set: {
                name: name,
                email: email,
                contact: contact,
                password: password,
                role: role
            }
        });

        if (updateUser.modifiedCount > 0) {
            return res.status(200).json({
                message: "user data  update!",
                success: true
            })
        }
        return res.status(400).json({
            message: "somthing went wrong",
            success: false,
        })
    } catch (err) {
        return res.status(500).json({ message: err.message, success: false })
    }

}



export const deleteUser = async (req, res) => {
    try {
        const userid = req.params.user_id;

        const deleteUser = await userModel.deleteOne({ _id: userid })
        if (deleteUser.deletedCount > 0) {
            return res.status(200).json({
                message: 'user data deleted',
                success: true
            })
        }
        return res.status(400).json({
            message: 'somthing went wrong',
            success: false
        })

    } catch (err) {
        return res.status(500).json({ message: err.message, success: false })
    }
}


