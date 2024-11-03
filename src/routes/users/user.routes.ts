import { Router } from 'express';
import UserController from "../../controllers/users/users.controller";
import UserMiddleware from "../../middlewares/user";
const router = Router();

// CREATE USER ROUTE
router.post('/', UserController.createUser);

// LOGIN ROUTE
router.post('/login', UserMiddleware.isUser, UserController.login);


export default router;