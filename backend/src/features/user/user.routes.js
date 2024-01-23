import express  from "express";

import UserController from "./user.controller";
import {uploads} from '../../middlewares/fileUpload.middleware.js'

import UserModel from "./user.model";
import UserController from "./user.controller";

const userRouter = express.Router();
const UserController= new UserController();

userRouter.post('/',(req,res)=>{
    UserController.addUser(req,res)
})

UserController.post('/',(req,res)=>{
    UserController.Login(req,res);
})

export default userRouter;