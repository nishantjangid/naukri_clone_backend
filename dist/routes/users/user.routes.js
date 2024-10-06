"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../../controllers/users/users.controller"));
const router = (0, express_1.Router)();
// Example route
router.get('/');
// Another route
router.post('/', users_controller_1.default.createUser);
exports.default = router;
