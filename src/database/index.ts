import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'onebitflix_dev',
  username: 'postgres',
  password: 'pipe260806',
  define: {
    underscored: true
  }
})