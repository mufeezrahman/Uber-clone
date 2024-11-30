import { configDotenv } from "dotenv";
configDotenv();

import express from "express"
import cors from "cors"
const app=express();
app.use(cors());
const port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(port,()=>{
    console.log(`Server running at port:${port}`);
})