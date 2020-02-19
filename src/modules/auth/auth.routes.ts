import {Application, Request, Response} from 'express';

import AuthController from './auth.controller';

class AuthRoutes{

	private app: Application;

	constructor(app: Application) {
		this.app  = app;
		this.init()
	}

	init() {
		this.app.route('/signin')
			.post(this.signin)
	}

 signin(req: Request, res: Response) {
		return AuthController.authentication(req, res)
	}

}

export default AuthRoutes;
