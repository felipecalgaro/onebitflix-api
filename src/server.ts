import express from 'express';
import { adminJS, adminJSRouter } from './adminjs';
import { sequelize } from './database';

const app = express()

app.use(express.static('public'))

app.use(adminJS.options.rootPath, adminJSRouter)

const PORT = process.env.PORT || 3000

sequelize.authenticate().then(() => {
  console.log('connected to database')

  app.listen(PORT, () => {
    console.log('server running on port', PORT);
  })
})
