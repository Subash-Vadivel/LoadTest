import cluster from "cluster";
import os from "os";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname=dirname(fileURLToPath(import.meta.url));
const cpucount=os.cpus().length;
console.log(`Cpu Count is ${cpucount}`);
cluster.setupPrimary({
    exec:__dirname+"/index.js",
})
for(let i=0;i<cpucount;i++)
{
    cluster.fork();
}
cluster.on("exit",(worker,code,signal)=>{
    console.log(`worker ${worker.process.id} has been killed`);
    cluster.fork();
})