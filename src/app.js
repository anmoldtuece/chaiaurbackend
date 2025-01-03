import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit : "17kb"})); 
app.use(express.urlencoded({extended: true, limit: "17kb"}));
app.use(express.static('public'));
app.use(cookieParser());
app.use((req, res, next) => {
    console.log("I am a middleware");
    next();
})

//routes

import userRouter from './routes/user.routes.js';


//routes declaration
app.use('/api/v1/users', userRouter);

//http://localhost:8000/api/v1/users/register

export default app;