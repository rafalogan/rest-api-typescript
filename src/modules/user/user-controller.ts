import {Request, Response} from 'express';
import httpStatus from 'http-status';


class UserController {

	constructor() {
	}

	getAll(req: Request, res: Response) {
		res.status(httpStatus.OK).json({
			menssagem: 'OK'
		})
	}

	createUser(req: Request, res: Response) {
		res.status(httpStatus.OK).json({
			menssagem: 'OK'
		})
	}

	getById(req: Request, res: Response) {
		res.status(httpStatus.OK).json({
			menssagem: 'OK'
		})
	}

	updateUser(req: Request, res: Response) {
		res.status(httpStatus.OK).json({
			menssagem: 'OK'
		})
	}

	deletUser(req: Request, res: Response) {
		res.status(httpStatus.OK).json({
			menssagem: 'OK'
		})
	}
}

export default UserController;

