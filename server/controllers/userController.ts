import type { Request, Response } from "express";
import { prisma } from "../prisma";
import type { UserType } from "../types/userType";

export const createUser = async (req: Request, res: Response) => {
    try {
        const userData: UserType = req.body;

        const user = await prisma.user.create({
            data: {
                email: userData.email,
                password: userData.password,
            }
        });

        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}