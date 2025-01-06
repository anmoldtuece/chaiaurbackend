import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import {User} from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res, next) => {
       //get user details from frontend
       //validate - not empty
       //check if user already exists : useranme, email
       //check for images : avatar, coverImage
       //upload them to cloudinary, avatar
       //create user object - create entry in db
       //remove password ans refreshToken from response
       //check for user creation
       //return response

       const {fullname, email, username, password} = req.body
       //console.log("email: ",email)
       

       if(fullname === "" || email === "" || username === "" || password === ""){
           throw new ApiError(400, "All fields are required");
       }    

       const existedUser = await User.findOne({
        $or: [
              {email: email}, 
              {username: username},
             ]
       })

       if(existedUser){
           throw new ApiError(409, "User already exists");
       }
       console.log("req.files: ",req.files)

       const avatarLocalPath = req.files?.avatar[0]?.path;
       const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    //    let coverImageLocalPath;
    //    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
    //           coverImageLocalPath = req.files.coverImage[0].path;
    //    }

       if(!avatarLocalPath){
           throw new ApiError(400, "Avatar and Cover Image are required");
       }
       
       const avatar = await uploadOnCloudinary(avatarLocalPath, "avatar");
       const coverImage = await uploadOnCloudinary(coverImageLocalPath, "coverImage");

       if(!avatar){
           throw new ApiError(500, "Error uploading images");
       }

       const user = await User.create(
        {
            fullname,
            email,
            username: username.toLowerCase(),
            password,
            avatar: avatar.url,
            coverImage: coverImage?.url || "",
        }
    )

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if(!createdUser){
        throw new ApiError(500, "Error creating user");
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User created successfully")
    )
    
});


export {registerUser};