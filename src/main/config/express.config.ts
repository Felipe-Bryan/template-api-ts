import cors from 'cors';
import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

export const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
      ok: true,
      msg: 'API',
    });
  });

  // ROUTES
  // app.use('/path', routerFile);

  return app;
};

// export class Server {
//   public static create() {
//     const app = express();
//     app.use(express.json());
//     app.use(cors());

//     // app.use('/path', routerFile);

//     return app;
//   }

//   public static listen(app: Express) {
//     app.listen(process.env.PORT, () => {
//       console.log('Servidor rodando na porta ' + process.env.PORT + '!');
//     });
//   }
// }
