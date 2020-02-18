import {Request, Response} from 'express';

import UserService from '../user/user-service';
import ResponseHandlers from '../../handlers/response-handlers';

class AuthController {

	constructor(private userService = UserService,
							private responseHandlers = ResponseHandlers) {}

	async authentication(req: Request, res: Response)  {
		const {email, password} = req.body;

		console.log(email, password);
		// if (email && password) try {
		// 	const user = await this.userService.getByEmail(email);
		// 	this.responseHandlers.authSucess(res, {email, password}, user)
		// }catch (err) {
		// 	this.responseHandlers.authFaill(req, res)
		// }
	}
}

export default new AuthController;
