import {Response} from 'express';
import httpStatus from 'http-status';

export function onError(res: Response, message: string, err: any) {
	console.error('Error:', err);
	res.status(httpStatus.INTERNAL_SERVER_ERROR).send(message);
}
