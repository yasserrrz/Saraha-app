

export class AppError extends Error {

    constructor(errorMessage , statusCode){
        super(errorMessage)
        
    }
}