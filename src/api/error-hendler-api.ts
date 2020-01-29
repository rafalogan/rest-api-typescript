import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errrorHandlerApi(err: ErrorRequestHandler, req: Request,
																 res: Response, nex: NextFunction) {
	console.error(`Api error handler foi executada: ${err}`);

	res.status(500).json({
		errorCode: 'ERR-001',
		message: 'Erro interno do servidor'
	})
}
