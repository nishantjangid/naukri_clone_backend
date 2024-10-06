import { Request, Response } from "express";
import API_RESPONSE from "../../helpers/api_response";
import UserServices from "../../services/users/users.service";

const createUser = async (req:Request,res:Response) => {
    try{
        let data = req.body;
        let response = await UserServices.createUser(data);
        API_RESPONSE.SUCCESS(res,"User created successfully",response)
    }catch(error){
        API_RESPONSE.ERROR(res,error);
    }
};

export default {
    createUser
};