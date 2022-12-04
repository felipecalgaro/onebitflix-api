module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'onebitflix_dev',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  }
}