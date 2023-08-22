import cors from 'cors';
import express, { Express } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

export class Server {
  public static create() {
    const app = express();
    app.use(express.json());
    app.use(cors());

    // app.use('/path', routerFile);

    return app;
  }

  public static listen(app: Express) {
    app.listen(process.env.PORT, () => {
      console.log('Servidor rodando na porta ' + process.env.PORT + '!');
    });
  }
}
