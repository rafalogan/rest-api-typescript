import {Request, Response} from 'express';

import UserService from '../user/user-service';
import {authFaill, authSucess} from '../../api/response/auth-success';
import {errrorHandlerApi} from '../../api/error-hendler-api';

class AuthController {
	private userService: UserService;

	constructor() {
		this.userService = new UserService();
	}

	authentication(req: Request, res: Response)  {
		console.log(req.body);
		const credentials = {
			email: req.body.email,
			password: req.body.password
		};

		if (credentials.email && credentials.password) this.userService.getByEmail(credentials.email)
			.then(user => authSucess(res, credentials, user))
			.catch(error => {
				console.error('Error A autenticação', error);
				authFaill(req, res)
			})
	}
}

export default AuthController;
