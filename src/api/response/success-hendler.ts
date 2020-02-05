import {Response} from 'express';
import httpStatus from 'http-status';

export function onSuccess(res: Response, data: any) {
	res.status(httpStatus.OK).json(data)
}
