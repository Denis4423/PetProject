import express, { Request, Response } from "express";
import userRoutes from "./routes/userRoute";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors())
app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running...")
})

export default app;