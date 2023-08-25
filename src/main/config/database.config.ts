import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

let entities = ['src/app/shared/database/entities/**/*.ts'];
let migrations = ['src/app/shared/database/migrations/**/*.ts'];

if (process.env.DB_ENV === 'production') {
  entities = ['build/app/shared/database/entities/**/*.js'];
  migrations = ['build/app/shared/database/migrations/**/*.js'];
}

let config;

if (process.env.DB_ENV === 'test') {
  config = new DataSource({
    type: 'sqlite',
    database: 'db.sqlite3',
    synchronize: false,
    entities,
    migrations: ['tests/app/shared/database/migrations/**/*.ts'],
  });
} else {
  config = new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    ssl: {
      rejectUnauthorized: false,
    },
    synchronize: false,
    schema: 'schema-name',
    entities,
    migrations,
  });
}

export default config;
