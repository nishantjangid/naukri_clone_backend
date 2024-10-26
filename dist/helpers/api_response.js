"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("@prisma/client/runtime/library");
const prisma_errors_1 = __importDefault(require("./prisma_errors"));
exports.default = {
    SUCCESS(res, message, data) {
        return res.status(200).json({
            status: 'success',
            message,
            data,
        });
    },
    ERROR(res, error) {
        if (error instanceof library_1.PrismaClientKnownRequestError) {
            let message = (0, prisma_errors_1.default)(error.code, error);
            return res.status(500).json({
                error: message
            });
        }
        return res.status(500).json({
            error: error.message
        });
    },
    NOT_FOUND(res, message) {
        return res.status(404).json({
            error: message
        });
    },
    FORBIDDEN(res, message) {
        return res.status(403).json({
            error: message
        });
    },
    UNAUTHORIZED(res, message) {
        return res.status(403).json({
            error: message
        });
    },
};
