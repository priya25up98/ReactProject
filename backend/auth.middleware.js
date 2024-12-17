import jwt from 'jsonwebtoken';
import userModel from './models/user.model';

//auht
export const auth = async (req, res, next) => {
    let token = null;
    try {
        if (req.headers.authorization) {
            token = req.headers.authorization;
            let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            if (decoded) {
                const user = await userModel.findOne({ _id: decoded.data.id }).select
                    ('-password');
                console.log('middlware', user)
                req.user = user;
                next();
            } else {
                return res.status(401).json({
                    messgae: "Invalid token"
                })
            }
        } else {
            return res.status(401).json({
                message: "Invalid Token"
            })
        }

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

//admin
export const admin = (req, res, next) => {
    if (req.user.isAdmin) {
        next()
    } else {
        res.status(403).json({
            message: "You don't have an access."
        })
    }
}