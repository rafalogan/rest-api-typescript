
import AuthorController from './author-controller'

class AuthorRoutes {
	constructor(private authorController = AuthorController) {}
}

export default new AuthorRoutes();
