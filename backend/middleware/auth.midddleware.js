import jwt from 'jsonwebtoken';

import userModel from '../models/user.model';

export const auth = async (req, res, next) => {

    token = null;

    try {

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}