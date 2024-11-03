import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import PrismaError from "./prisma_errors";
import { Response } from "express";

export default {
  SUCCESS(res: Response, message: string, data: any) {
    return res.status(200).json({
      message,
      data,
    });
  },
  ERROR(res: Response, error: any) {
    if (error instanceof PrismaClientKnownRequestError) {
      let message = PrismaError(error.code, error);
      return res.status(500).json({
        error: message,
      });
    }
    return res.status(500).json({
      error: error.message,
    });
  },
  NOT_FOUND(res: Response, message: string) {
    return res.status(404).json({
      error: message,
    });
  },
  FORBIDDEN(res: Response, message: string) {
    return res.status(403).json({
      error: message,
    });
  },
  UNAUTHORIZED(res: Response, message: string) {
    return res.status(403).json({
      error: message,
    });
  },
};
