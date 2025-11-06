import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getOneUser, updateUserEmail, updateUserPassword } from "../controllers/userController";

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUserPassword);
router.patch("/:id", updateUserEmail);

export default router;