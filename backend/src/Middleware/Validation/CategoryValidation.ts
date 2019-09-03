import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";
import  CategorySchema from "../schemas/categorySchema";



export default class categoryValidation {

    createCategory(request:Request, response: Response, next:NextFunction){
        const category = new CategorySchema(request.body)
        validate(category, { validationError: { target: false } }).then(errors => {
            if (errors.length > 0) {
                console.log("validation failed. errorssssss: ", errors);
                return response.status(400).send(...errors)
                
            } else {
                next();
                console.log("validation succeed");
            }
        });
    }
}










