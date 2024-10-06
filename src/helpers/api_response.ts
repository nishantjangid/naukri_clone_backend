import { Response } from 'express';

export default {
    SUCCESS(res: Response, message: string, data: any) {
        return res.status(200).json({
            status: 'success',
            message,
            data,
        });
    },
    ERROR(res: Response, message: any) {
        return res.status(500).json({            
            message
        });
    },
    NOT_FOUND(res: Response, message: string) {
        return res.status(404).json({            
            message
        });
    },
    FORBIDDEN(res: Response, message: string) {
        return res.status(403).json({            
            message
        });
    },
    UNAUTHORIZED(res: Response, message: string) {
        return res.status(403).json({            
            message
        });
    },

};
