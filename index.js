import express from "express";
import cors from "cors";
import 'dotenv/config';
import routes from "./routes/index.js"
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('',routes);
app.use('*',(req, res)=>{
    res.send({ "res": "not found"});
});

app.listen(port, ()=>{
    console.log("Server is running on port: ", port)
});

