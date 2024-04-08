


// export const catchError = (fun)=>{
//     return async (req , res , next)=>{
//         try {
//             await fun(req, res);
//         } catch (error) {
//             console.log("catchError", error);
//             next(error);
//         }
        
//     }
// }

export const catchError = (fun) => {
    return async (req, res, next) => {
        try {
            await Promise.resolve(fun(req, res));
        } catch (error) {
            console.log("catchError", error);
            next(error);
        }
    };
};
