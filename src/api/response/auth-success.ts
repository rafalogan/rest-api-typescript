import {Request, Response} from 'express';
import httpStatus from 'http-status';
import jwt from 'jwt-simple'
import bcrypt from 'bcrypt';

const config = require('../../config/config')();

export function authSucess(res: Response, credential: any, data: any) {
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
			token: jwt.encode(payload, config.authSecret)
		})
	}
}

export function authFaill(req: Request, res: Response) {
	res.status(httpStatus.UNAUTHORIZED).json({
		code: httpStatus.UNAUTHORIZED,
		message: 'Login não autorizado!! Verifique seu e-mail e senha.'
	})
}
