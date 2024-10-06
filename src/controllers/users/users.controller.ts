import { NextFunction, Request, Response } from "express";
import API_RESPONSE from "../../helpers/api_response";
import UserServices from "../../services/users/users.service";

const createUser = async (req:Request,res:Response,next:NextFunction) => {
    try{
        let data = req.body;
        let response = await UserServices.createUser(data);
    }catch(error){
        API_RESPONSE.ERROR(res,error);
    }
}

export default {
    createUser
}