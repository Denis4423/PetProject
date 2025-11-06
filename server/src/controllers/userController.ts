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

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const getOneUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({
            user
        })
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.delete({
            where: {
                id: Number(id)
            }
        });
        res.status(200).json({
            user
        })
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUserPassword = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                password
            }
        });
        res.status(200).json({
            user
        })
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const updateUserEmail = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { email } = req.body;
        const user = await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                email
            }
        })
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}