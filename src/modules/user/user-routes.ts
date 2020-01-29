import { Request, Response } from 'express';

class UserRoutes {

	constructor() {
	}

	index(req: Request, res: Response) {
		res.send([
			{user: 1, nome: 'anna'},
			{user: 2, nome: 'marta'},
		])
	}

	create(req: Request, res: Response) {}

	findOne(req: Request, res: Response) {}

	update(req: Request, res: Response) {}

	destroy(req: Request, res: Response) {}
}

export default UserRoutes;
