import Router from "express";
const router = Router();

router.get("/",async(req, res)=>{
    res.status(200).send({ msg: 'success' });
});


export default router;