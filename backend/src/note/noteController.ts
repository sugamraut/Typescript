import { NextFunction, Request,Response } from "express";
import noteModel from "./noteModel";
import envConfig from "../config/config";
import createHttpError from "http-errors"

const createNote=async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const file=req.file?`http://localhost:${envConfig.port}/${req.file.filename}`:"https://th.bing.com/th?id=OIP.NK7PSAeNgy_ZSUFBPiDdtgHaFl&w=287&h=217&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    const{title,subtitle,description}=req.body
    if(!title||!subtitle||!description){
     res.status(400).json({
         message:"please provide title and description"
     })
     return
    }
     await noteModel.create({
     title,
     subtitle,
     description,
     file
    })
    res.status(201).json({
     message:"data create successfully"
    })
    
  } catch (error) {
    console.log(error)
    return next(createHttpError(500,"Error while creating"))
  }
}