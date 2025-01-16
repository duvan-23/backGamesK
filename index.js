import express from "express";
import cors from "cors";
import 'dotenv/config';
import routes from "./routes/index.js";
import routesAuth from "./routes/auth.js";
import { verifyToken } from './middleware/auth.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './utils/swagger.js';

//Create server with express
const app = express();

//Config swagger
const swaggerSpec = swaggerJsDoc(swaggerOptions);
// Middleware that allows all origins
app.use(cors());
//Middleware that parses incoming Json
app.use(express.json());
// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//Path to obtain the access token
app.use('/auth',routesAuth);
//Middleware security JWT
app.use(verifyToken);
//Defined routes
app.use('',routes);
//Route not found
app.use('*',(req, res)=>{
    res.status(404).send({ "msg": "Route not found"});
});

export default app;
