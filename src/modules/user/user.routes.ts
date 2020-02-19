import {Application, Request, Response} from 'express';

import UserController from './user.controller';

class UserRoutes {

	constructor(app: Application, auth: any) {
			this.init(app, auth);
	}

	init(app: Application, auth: any) {

		app.route('/users')
			.all(auth.init().authenticate())
			.get(this.index)
			.post(this.create);

		app.route('/users/:id')
			.all(auth.init().authenticate())
			.get(this.findOne)
			.put(this.update)
			.delete(this.destroy);
	}

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

export default UserRoutes;
