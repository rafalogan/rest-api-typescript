import {Response} from 'express';

export function dbErrorHandler(msg: string, err: any) {
	console.error(msg, err);
}
