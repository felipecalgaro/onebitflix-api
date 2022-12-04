import express from 'express';
import { sequelize } from './database';

const app = express()

const PORT = process.env.PORT || 3000

sequelize.authenticate().then(() => {
  console.log('connected to database')

  app.listen(PORT, () => {
    console.log('server running on port', PORT);
  })
})
