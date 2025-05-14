import { Request, Response, NextFunction } from 'express';

import { prisma } from '../utils/prisma';

const getExpenses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const fetchedExpenseList = await prisma.expense.findMany()

        return res.status(200).json({
            message: "Expense list has been fetched successfully.",
            expenseList: fetchedExpenseList
        })
    } catch(error) {
        next(error);
    }
    
}

const getExpenseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const fetchedExpenseItem = await prisma.expense.findUnique({
                where: {
                id: req.params.id
            },
        });

        if (fetchedExpenseItem) {
            return res.status(200).json({
                message: "Expense item has been fetched successfully.",
                expenseItem: fetchedExpenseItem
            });
        } else {
            return res.status(404).json({
                message: "No such item with the provided id. Please check your id."
            });
        }
    } catch(error) {
        next(error);
    }
}

export const expenseController = {
    getExpenses,
    getExpenseById
};