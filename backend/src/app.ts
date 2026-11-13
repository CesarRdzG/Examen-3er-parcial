import { Server } from './models/server.ts'
import 'dotenv/config';

const server = new Server();

server.listen();