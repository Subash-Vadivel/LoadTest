import express from "express";
import {Worker} from "worker_threads";
const app=express();
app.get('/',(req,res)=>{
    res.send("Loaded from AWS");
})
app.get('/load',(req,res)=>{
    const worker=new Worker("./worker.js");
    worker.on("message",(data)=>{
        res.status(200).send(`result is ${data}`);
    })
    worker.on("error",(error)=>{
        res.send(`Error : ${error}`);

    })
})
app.listen(8000,()=>{
    console.log(`Listing port 8000 PID: ${process.pid}`);
})