//כאן יש את הניתובים של הפונקציות

import express from 'express'
import { Add, getByUserNameAndPassword } from '../controler/user.js'
const UserRouter=express.Router()
UserRouter.post("/getByUserNameAndPassword", getByUserNameAndPassword);
UserRouter.post("/Add",Add)
export default UserRouter

