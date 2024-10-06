import prisma from "../config/db.config";
import { CreateUser } from "../types";

const createUser = async (data:CreateUser) => {
    try{
        return await prisma.user.create({
            data
        });
    }catch(error){
        return error;
    }
};


export default {
    createUser
};