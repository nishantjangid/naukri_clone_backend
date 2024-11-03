import { CreateUser } from "../types";
import Queries from "../db/queries";

// CREATE USER DB QUERY
const createUser = async (data:CreateUser) => {
    try{        
        // CREATE A QUERY INSTANCE
        let queries = new Queries();

        // SELECT DATA FROM QUERY
        let select = {
            id:true,
            email:true 
        }

        let result = await queries.create("user",data,select)
        return {status:"success",data:result};
    }catch(error){
        return {status:"error",error:error};        
    }
};


export default {
    createUser
};