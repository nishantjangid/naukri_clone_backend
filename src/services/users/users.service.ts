import {CreateUser, LoginUser} from "../../types";
import UserDB from "../../db/user.db";
import passwordEncryption from "../../utils/passwordEncryption";
import Query from "../../db/queries";
import JWT from "../../utils/authToken";
// CREATE USER SERVICE
const createUser = async (data:CreateUser) => {
    try{
        let {password} = data;
        let hashedPassword = await passwordEncryption.encryptPassword(password);
        data.password = hashedPassword;
        let response = await UserDB.createUser(data);
        return response;
    }catch(error){
        return {status:"error",error:error};        
    }
};

const login = async (data:LoginUser) => {
    try{
        const {password,email} = data;
        const queries = new Query();
        const where = {
            email
        }
        const user : any = await queries.readOne("user",where,{password:true,id:true});
        let hashedPassword = await passwordEncryption.checkPassword(password,user?.password);
        if(hashedPassword){
            let token = await JWT.generateAuthToken({id:user.id});
            return {status:"success",token};
        }else{
            return {status:"error",error:"Invalid email and password"};
        }
    }catch(error){
        return {status:"error",error:error};        
    }
};

export default {
    createUser,
    login
};