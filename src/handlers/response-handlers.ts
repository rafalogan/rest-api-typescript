import {ErrorRequestHandler, NextFunction, Request, Response} from 'express';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';

import Config from '../config/config.env';


class ResponseHandlers {

	errrorHandlerApi(err: ErrorRequestHandler, req: Request,
									 res: Response, next: NextFunction) {
		console.error(`Api error handler foi executada: ${err}`);

		res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
			errorCode: 'ERR-001',
			message: 'Erro interno do servidor'
		})
	}

	onSuccess(res: Response, data: any) {
		res.status(httpStatus.OK).json(data)
	}

	onError(res: Response, message: string, err: any) {
		console.error('Error:', err);
		res.status(httpStatus.INTERNAL_SERVER_ERROR).send(message);
	}

	authSucess(res: Response, credential: any, data: any) {
		const isMatch = bcrypt.compareSync(credential.password, data.password);
		console.log('Credencial pass', credential.password);
		console.log('data pass', data.password);
		const now = Math.floor(Date.now() / 1000);

		if (!isMatch) {
			res.status(httpStatus.UNAUTHORIZED).json({
				code: httpStatus.UNAUTHORIZED,
				message: 'Login não autorizado!! Verifique seu e-mail e senha.'
			});
		} else {
			const payload = {
				id: data.id,
				email: data.email,
				iat: now,
				exp: now + (60 * 60 * 24)
			};

			res.status(httpStatus.OK).json({
				...payload,
				token: jwt.encode(payload, Config.authSecret)
			})
		}
	}

	authFaill(req: Request, res: Response) {
		res.status(httpStatus.UNAUTHORIZED).json({
			code: httpStatus.UNAUTHORIZED,
			message: 'Login não autorizado!! Verifique seu e-mail e senha.'
		})
	}

	dbErrorHandler(msg: string, err: any) {
		console.error(msg, err);
	}

}

export default new ResponseHandlers();
