import 'reflect-metadata';
import { Database } from './main/database/database.connection';
import { CacheDatabase } from './main/database/redis.connection';
import { Server } from './main/server/express.server';

Promise.all([Database.connect(), CacheDatabase.connect()]).then(() => {
  Server.listen();
});
