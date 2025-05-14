import { Request, Response, NextFunction } from 'express';

import { prisma } from '../utils/prisma';
import {
    isFieldNotEmpty,
    isEmail,
    includesNonEnglish,
    isPasswordValid,
} from '../utils/validateInput';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const fetchedUserList = await prisma.user.findMany({
            select: {
                email: true,
                password: false,
            },
        });

        return res.status(200).json({
            message: 'User list has been fetched successfully.',
            userList: fetchedUserList,
        });
    } catch (error) {
        next(error);
    }
};

const signup = (req: Request, res: Response, next: NextFunction) => {
    const formData = req.body;
    const { email, password } = formData || {};

    if (!isFieldNotEmpty(formData)) {
        return res.status(400).json({
            message: 'No field in form should be empty!',
        });
    }

    if (!isEmail(email)) {
        return res.status(400).json({
            message: 'Please enter your email in the correct format!',
        });
    }

    // TODO to be continued

    return res.status(200).json({
        message: 'Signup successfull!',
    });
};

export const userController = {
    getUsers,
    signup,
};
