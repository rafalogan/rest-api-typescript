
import Db from '../../config/db/db';
import {IAuthor, IAuthorDetail} from './author-interface';

class AuthorService {

	private table: string = 'author';

	constructor(private db = Db) {}


	createAuthor(author: IAuthorDetail) {
	 return this.db.create(this.table, author);
	}

	updateAuthor(id: number, author: IAuthorDetail) {
		return this.db.update(this.table, id, author);
	}

	getAll(limit: number, page: number): Promise<IAuthor[]> {
		return this.db.getAll(this.table, [], limit, page);
	}

	getAuthorById(id: number): Promise<IAuthorDetail> {
		return this.db.getById(this.table, id);
	}

	deleteAuthor(id: number) {
		return this.db.remove(this.table, id);
	}

}

export default new AuthorService();
