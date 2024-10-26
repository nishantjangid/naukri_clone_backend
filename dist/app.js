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
exports.handler = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const serverless_http_1 = __importDefault(require("serverless-http"));
const app = (0, express_1.default)();
// MIDDLEWARES
app.use(express_1.default.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({
        message: "Hello World!"
    });
}));
// ROUTES
app.use("/v1/api/users", routes_1.UserRoutes);
// app.listen(ENV_VARIABLES.PORT,()=>{
//     console.log(`Started on ${ENV_VARIABLES.PORT}`);
// });
exports.handler = (0, serverless_http_1.default)(app);
