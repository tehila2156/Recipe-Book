//כאן יש את הניתובים של הפונקציות

import express from 'express'
import { Add, getAll, getById } from '../controler/resipy.js'
const RecipyRouter=express.Router()
RecipyRouter.get("/getAll",getAll)
RecipyRouter.get("/getById/:id",getById)
RecipyRouter.post("/Add",Add)
export default RecipyRouter

