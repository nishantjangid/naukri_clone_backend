import { AuthData } from "../types";
import jwt from "jsonwebtoken";
import ENV_VARIABLES from "../config/env.config";
const generateAuthToken = async (data:AuthData) => {
    try{
        const secretString : string | undefined  = ENV_VARIABLES.JWT_SECRET;

        // Ensure the JWT secret is defined
        if (!secretString) {
            throw new Error("JWT secret is not defined in environment variables.");
        }

        const token = jwt.sign(data,secretString);
        return token;
    }catch(err:any){
        throw new Error(err.message);
    }
}

export default {
    generateAuthToken
}