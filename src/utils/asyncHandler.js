const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err)=>next(err));
    }
};

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