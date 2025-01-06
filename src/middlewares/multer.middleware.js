// Import multer, a middleware for handling file uploads
import multer from 'multer';

// Configure storage settings for uploaded files
const storage = multer.diskStorage({
    // Define the destination directory for uploaded files
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Save files in the 'public/temp' directory
    },
    // Define the filename for uploaded files
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original file name
    }
});

// Create an instance of multer with the configured storage
export const upload = multer({ 
    storage, // Use the custom storage configuration
});
