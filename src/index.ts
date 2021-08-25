import express from "express";
import mongoose from "mongoose";

import { StudentRoutes } from "./routes/studenRoute";
import { TeacherRoutes } from "./routes/teacherRoute";

const app = express()
const PORT:number =  5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/SchoolCurd').then(()=>{
    console.log("connected SuccessFully")
}).catch(()=>{
    console.log("Not Connected")
})

app.use("/student",StudentRoutes)
app.use("/teacher",TeacherRoutes)

app.listen(PORT,()=>{
    console.log("Server is Up")
})