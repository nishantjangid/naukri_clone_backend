import prisma from "../config/db.config";
import { CreateUser } from "../types";

const createUser = async (data:CreateUser) => {
    try{        
        let result = await prisma.user.create({
            data
        });
        return {status:"success",data:result};
    }catch(error){
        return {status:"error",error:error};        
    }
};


export default {
    createUser
};