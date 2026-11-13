import express, { type Application } from "express";
import cors from "cors";
import notesRouter from '../routes/notes.routes.ts';
import { dbConnection } from "../database/config.ts";
import dotenv from "dotenv";

export class Server {
    private app: Application;
    private port: number;
    private apiPaths = {
        notes: '/api/notes',
    }

    constructor() {
        this.app = express();
        this.port = Number(process.env.PORT);

        this.middlewares();
        this.conectDB();
        this.routes();
    }

    private middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private routes() {
        this.app.use(this.apiPaths.notes, notesRouter);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log('Listening on port', this.port);
        });
    }

    private async conectDB() {
        await dbConnection();
    }
}