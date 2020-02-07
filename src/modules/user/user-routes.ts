import { Request, Response } from 'express';

import UserController from './user-controller';

class UserRoutes {

	constructor() {}

	index(req: Request, res: Response) {
		return UserController.getAllUsers(req, res);
	}

	create(req: Request, res: Response) {
		return UserController.createUser(req, res);
	}

	findOne(req: Request, res: Response) {
		return UserController.getUserById(req, res);
	}

	update(req: Request, res: Response) {
		return UserController.updateUser(req, res);
	}

	destroy(req: Request, res: Response) {
		return UserController.deletUser(req, res);
	}
}

export default new UserRoutes();
