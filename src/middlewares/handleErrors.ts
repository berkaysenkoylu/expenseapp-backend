import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    res.status(status).json({
        success: false,
        message,
        // In production, you might want to omit `error` or include only safe details
        error: process.env.NODE_ENV === 'development' ? error : undefined,
    });
};
