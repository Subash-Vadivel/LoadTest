import {parentPort} from "worker_threads";
let a=0;
    for(let i=0;i<100_00_00_00_000;i++)
    {
         a++;
    }
    parentPort.postMessage(a);