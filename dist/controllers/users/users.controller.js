"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_response_1 = __importDefault(require("../../helpers/api_response"));
const users_service_1 = __importDefault(require("../../services/users/users.service"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body;
        let response = yield users_service_1.default.createUser(data);
        api_response_1.default.SUCCESS(res, "User created successfully", response);
    }
    catch (error) {
        api_response_1.default.ERROR(res, error);
    }
});
exports.default = {
    createUser
};
