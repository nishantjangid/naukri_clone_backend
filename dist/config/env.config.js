"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const ENV_VARIABLES = {
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    ENVIRONMENT: process.env.NODE_ENV
};
exports.default = ENV_VARIABLES;
