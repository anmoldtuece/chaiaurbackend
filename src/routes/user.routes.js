// Import necessary modules and functions
import { Router } from 'express'; // Provides routing functionality
import { registerUser } from '../controllers/user.controller.js'; // Controller function to handle user registration
import { upload } from '../middlewares/multer.middleware.js'; // Multer middleware for handling file uploads

// Create a router instance
const router = Router();

// Define a route for user registration
router.route("/register").post(
    // Handle file uploads with specific fields and limits
    upload.fields([
        { name: "avatar", maxCount: 1 }, // Single file for "avatar"
        { name: "coverImage", maxCount: 1 } // Single file for "coverImage"
    ]),
    registerUser // Controller to process the request after files are uploaded
);

// Export the router for use in the main app
export default router;
