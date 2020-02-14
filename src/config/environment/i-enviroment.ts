export interface IEnviroment {
	env: string;
	client: string;
	connection: {
		database: string
		user: string
		password: string
	};
	serverPort: number;
	serverHost: string;
	databasePort: number;
	authSecret: string;
}
