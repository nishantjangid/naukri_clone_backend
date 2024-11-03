export interface CreateUser {
    name?:string;
    email:string;   
    password:string; 
}

export interface LoginUser {
    email:string;   
    password:string;
}

export interface AuthData {
    id:number;
}