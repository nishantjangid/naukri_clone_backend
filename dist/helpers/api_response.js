"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    SUCCESS(res, message, data) {
        return res.status(200).json({
            status: 'success',
            message,
            data,
        });
    },
    ERROR(res, message) {
        return res.status(500).json({
            message
        });
    },
    NOT_FOUND(res, message) {
        return res.status(404).json({
            message
        });
    },
    FORBIDDEN(res, message) {
        return res.status(403).json({
            message
        });
    },
    UNAUTHORIZED(res, message) {
        return res.status(403).json({
            message
        });
    },
};
