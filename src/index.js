// require('dotenv').config({path: './env'})
// Load environment variables from .env file
import dotenv from "dotenv";

// Import database connection function
import connectDB from "./db/index.js";

// Import the Express app instance
import app from "./app.js";

// Configure dotenv to use a specific .env file
dotenv.config({ path: './.env' });

// Connect to the database and start the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error("Database connection error:", error);
        throw error;
    });

/*
import express from 'express';
const app = express();


(async () => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,);
       app.on("error", (error) => {
        console.error('Error: ', error);
        throw error;
       })

       app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
       })

    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
})()
*/