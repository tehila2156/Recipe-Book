import express from 'express'
import mongoose from 'mongoose'
import UserRouter from './routers/user.js'
import RecipyRouter from './routers/recipy.js'
import bodyParser from 'body-parser'
import cors from 'cors'
//הקובץ הראשי של הפרוייקט
console.log("hello")

const app=express()
const port=3001



app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:4200',  // הגדרת מקור ספציפי
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // הגדרת המתודולוגיות
    allowedHeaders: ['Content-Type', 'Authorization']  // הגדרת כותרות מותרות
  }));
//459aRIZXqkgsqe6l%40
//mongodb+srv://yeudit1983:tehiladayan15@cluster0.h9p5y.mongodb.net/RecipesDb?retryWrites=true&w=majority
//password:459aRIZXqkgsqe6l
//mongodb+srv://yeudit1983:459aRIZXqkgsqe6l%40@cluster0.h9p5y.mongodb.net/
mongoose.connect("mongodb://127.0.0.1:27017/RecipyDb")
.then(()=>
{
    
   
    console.log("conection to mongoDb!😁😁")
}
)
.catch(err=>
{
    console.error({error:err})
}
)


app.use('/users',UserRouter)
app.use('/recipy',RecipyRouter)

//מאזין
app.listen(port,()=>
{
    console.log(`my application is running in http://localhost:${port}`)
})