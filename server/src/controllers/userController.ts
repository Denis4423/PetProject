import { prisma } from "../prisma";
import { User } from "../types/userType";
import type { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
    try {
        const userData: User = req.body;

        const user = await prisma.user.create({
            data: {
                email: userData.email,
                password: userData.password
            }
        });

        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}