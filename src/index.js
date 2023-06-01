import express from 'express'
import indexRoutes from './routes/indexRoutes.js'
import apiRoutes from './routes/apiRoutes.js'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = dirname (fileURLToPath(import.meta.url)) //absolute link, starts at src/

app.set('views', join(__dirname, 'views')) //join src/views
app.set('view engine', 'ejs') //Set ejs as our view end


//npm run app
app.use(indexRoutes)
app.use('/api', apiRoutes)
app.listen(3000) //Server port
console.log('Server on port 3000')