import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ 
  origin: "http://localhost:3000",
  credentials: true 
}));
app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.send("Server is running")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDb();
});