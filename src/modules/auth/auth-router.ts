import {Request, Response} from 'express';

import AuthController from './auth-controller';

const authCtlr = new AuthController();

class AuthRouter {

	constructor() {}

	signin(req: Request, res: Response) {
		return authCtlr.authentication(req, res)
	}


}

export default AuthRouter;
