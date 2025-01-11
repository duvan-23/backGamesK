import fs from 'fs';
import Router from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const router = Router();

const removeExtension = (fileName)=>{
    return fileName.split('.').shift();
}

const fileNames  = fs.readdirSync(__dirname);
fileNames.forEach((fileName)=>{
    const name = removeExtension(fileName);
    if(name!="index"){
        router.use(`/${name}`, async(req, res, next)=>{
            try{
                const module = await import(`./${fileName}`);
                module.default(req,res, next)
            }catch(e){
                next(e);
            }
        });
    }
});


export default router;