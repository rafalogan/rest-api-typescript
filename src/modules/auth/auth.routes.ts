import {Request, Response} from 'express';

import AuthController from './auth-controller';

class AuthRoutes{

	constructor() {}

	async signin(req: Request, res: Response) {
		return AuthController.authentication(req, res)
	}

}

export default new AuthRoutes;
