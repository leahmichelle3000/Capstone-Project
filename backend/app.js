import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import userRoute from './routes/userRoute.js';
import cors from 'cors'
import stockRoute from './routes/stockRouteForCapstone.js';
import bodyParser from 'body-parser'
import express from 'express'

const app = express()


//APP.USE LINES
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())


app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

// app.use('/socialmedia', socialRoute);
app.use('/user', userRoute);
// trying to bring in stockRoute
// main route is localhost address/stock

//main route is stock and subRoute is what is defined in stockRoute
app.use('/stock', stockRoute);



export default app