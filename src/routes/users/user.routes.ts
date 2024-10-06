import { Router, Request, Response } from 'express';
import UserController from "../../controllers/users/users.controller";

const router = Router();

// Example route
router.get('/', );

// Another route
router.post('/', UserController.createUser);

export default router;