// Import required libraries
import express from 'express'; // Web framework for building APIs
import cors from 'cors'; // Middleware to enable Cross-Origin Resource Sharing
import cookieParser from 'cookie-parser'; // Middleware to parse cookies

// Create an Express app instance
const app = express();

// Enable CORS with specific origin and credentials support
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allowed origin specified in environment variables
    credentials: true // Allow cookies and credentials across origins
}));

// Middleware to parse JSON and URL-encoded data with size limits
app.use(express.json({ limit: "17kb" })); // Limit JSON payload to 17kb
app.use(express.urlencoded({ extended: true, limit: "17kb" })); // Limit URL-encoded data to 17kb

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Parse cookies in incoming requests
app.use(cookieParser());

// Custom middleware to log each request
app.use((req, res, next) => {
    console.log("I am a middleware"); // Log a message
    next(); // Pass control to the next middleware
});

// Import user-related routes
import userRouter from './routes/user.routes.js';

// Declare routes for user-related APIs
app.use('/api/v1/users', userRouter);

// Example endpoint: http://localhost:8000/api/v1/users/register

// Export the configured app instance for use in other files
export default app;
