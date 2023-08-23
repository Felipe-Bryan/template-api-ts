import { createApp } from '../config/express.config';

export class Server {
  public static listen() {
    const app = createApp();

    app.listen(process.env.PORT, () => {
      console.log(`API running in port: ${process.env.PORT}`);
    });
  }
}
