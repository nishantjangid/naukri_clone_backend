import {CreateUser} from "../../types";
import UserDB from "../../db/user.db";
const createUser = async (data:CreateUser) => {
    try{
        let response = await UserDB.createUser(data);
        return response;
    }catch(error){
        return error;
    }
}

export default {
    createUser
}