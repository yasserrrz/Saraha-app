

export class AppError extends Error {

    constructor(errorMessage , status){
        super(errorMessage)
    }
}