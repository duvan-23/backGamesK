import express from "express";
import cors from "cors";
import 'dotenv/config';
import routes from "./routes/index.js";
import { verifyToken } from './middleware/auth.js';

const app = express();
const port = process.env.PORT || 3000;

// Allow all origins
app.use(cors());

app.use(express.json());

//Middleware security to make endpoints more robust with JWT
app.use(verifyToken);
//Use defined routes
app.use('',routes);
//Route not found
app.use('*',(req, res)=>{
    res.status(404).send({ "msg": "Route not found"});
});

// Run server
app.listen(port, ()=>{
    console.log("Server is running on port: ", port)
});

