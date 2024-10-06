import express,{ Request, Response } from "express";
import { UserRoutes } from "./routes";
import ENV_VARIABLES from "./config/env.config";

const app = express();

app.get("/",async (req:Request,res:Response) => {
    res.status(200).json({
        message:"Hello World!"
    });
});

// ROUTES
app.use("/v1/api/users",UserRoutes);

app.listen(ENV_VARIABLES.PORT,()=>{
    console.log(`Started on ${ENV_VARIABLES.PORT}`);
});