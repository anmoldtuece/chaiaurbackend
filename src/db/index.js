// Import Mongoose, an ODM library for MongoDB
import mongoose from 'mongoose';

// Import database name from constants
import { DB_NAME } from '../constants.js';

// Function to establish a connection to the MongoDB database
const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI and database name
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        // Log the host of the connected database
        console.log(`\n Connected to the database !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        // Log the error and exit the process if the connection fails
        console.log("MongoDB connection error:", error);
        process.exit(1); // Exit with failure
    }
};

// Export the function for use in other modules
export default connectDB;
