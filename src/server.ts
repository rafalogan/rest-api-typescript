import * as http from 'http';

const server = http.createServer();

server.listen(9000,
	() => console.log('Server Online http://localhost:9000'));
