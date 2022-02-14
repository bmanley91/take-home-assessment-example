import * as express from 'express';
import * as cors from 'cors';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { findUsers } from './service/userService';

const corsOptions: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
    methods: 'GET',
    origin: 'http://localhost:3000'
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

createConnection().then(connection => {
    app.get("/users", async (req: Request, res: Response) => {
        try {
            const users = await findUsers(connection, req.query);
            res.json(users);
        } catch (error) {
            res.status(500);
            res.json(error);
        }
    });
});

app.listen(3001);
