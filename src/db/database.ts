import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'grocery',
  username: 'postgres',
  password: 'omkar',
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
});
