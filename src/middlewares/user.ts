import { NextFunction, Request, Response } from "express";
import API_RESPONSE from "../helpers/api_response";
import Query from "../db/queries";

const isUser = async (req:Request,res:Response,next:NextFunction) : Promise<any> => {
    try{
        const {email} = req.body;
        const query = new Query();
        const where = {
            email
        }

        const result = await query.readOne("user",where);
        if(!result){
            return API_RESPONSE.NOT_FOUND(res,"User Not Found");
        }
        next();
    }catch(error){
        API_RESPONSE.ERROR(res,error);
    }
}

export default {
    isUser
}