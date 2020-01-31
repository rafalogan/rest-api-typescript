import {Request, Response} from 'express';

class UserController {

	constructor() {
	}

	getAll(req: Request, res: Response) {
		res.status(200).json({
			menssagem: 'OK'
		})
	}

	createUser(req: Request, res: Response) {
		res.status(200).json({
			menssagem: 'OK'
		})
	}

	getById(req: Request, res: Response) {
		res.status(200).json({
			menssagem: 'OK'
		})
	}

	updateUser(req: Request, res: Response) {
		res.status(200).json({
			menssagem: 'OK'
		})
	}

	deletUser(req: Request, res: Response) {
		res.status(200).json({
			menssagem: 'OK'
		})
	}
}

export default UserController;

