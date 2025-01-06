// A utility function to handle async errors in request handlers
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // Wrap the handler in a resolved promise to catch errors
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err)); // Pass any errors to the next middleware (error handler)
    };
};

// Export the asyncHandler for use in other modules
export default asyncHandler;








//const asyncHandler =()=>{};
//const asyncHandler =(func)=>()=>{};
//const asyncHandler =(func)=>async ()=>{};


// const asyncHandler = (fn) => async (req, res, next) => {
//     try{
//         await fn(req, res, next);
//     }
//     catch(error){
//         res.status(error.code ||500).json({
//             sucess: false,
//             message: error.message || "Internal server error"
//         })
//     }
// }