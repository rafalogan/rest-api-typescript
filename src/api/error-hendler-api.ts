import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import httpStatus from 'http-status';

export function errrorHandlerApi(err: ErrorRequestHandler, req: Request,
																 res: Response, next: NextFunction) {
	console.error(`Api error handler foi executada: ${err}`);

	res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
		errorCode: 'ERR-001',
		message: 'Erro interno do servidor'
	})
}
