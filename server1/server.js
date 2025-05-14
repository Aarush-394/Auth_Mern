import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRouter from './routes/authRoutes.js'


import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoutes.js';

const app=express();
const port =process.env.PORT || 4000
connectDB();


app.use(express.json());
app.use(cookieParser());
const allowedOrigins = ['http://localhost:5173', 'https://auth-mern-frontend-y0ev.onrender.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {  // Allow requests from local and Render domains
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'), false);
    }
  },
  credentials: true
}));
app.use("/api/auth", authRouter);


//API endpoints
app.get("/",(req,res)=>res.send("API working"));
app.use("/api/user", userRouter);

app.listen(port, ()=> console.log(`Server started on PORT:${port}`));
