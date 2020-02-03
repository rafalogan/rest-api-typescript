import { Request, Response } from 'express';

import UserController from './user-controller';

const UserCtlr: UserController = new UserController();

class UserRoutes {

	constructor() {
	}

	index(req: Request, res: Response) {
		return UserCtlr.getAll(req, res);
	}

	create(req: Request, res: Response) {
		return UserCtlr.createUser(req, res);
	}

	findOne(req: Request, res: Response) {
		return UserCtlr.getById(req, res);
	}

	update(req: Request, res: Response) {
		return UserCtlr.updateUser(req, res);
	}

	destroy(req: Request, res: Response) {
		return UserCtlr.deletUser(req, res);
	}
}

export default UserRoutes;
