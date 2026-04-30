import bcrypt from 'bcrypt'
import authModle from '../models/authModel.js'
import jwt from 'jsonwebtoken'

export const insertDatas = async(req,res)=>{

    //console.log(req.body);

    const {username,email,password} = req.body

    try {
        
        const hashed = await bcrypt.hash(password,10)
        const added = await authModle.create({username,email,password:hashed})
        res.status(201).json({msg:"Successfully insert"})
        
    } catch (error) {

        console.log('error',error);
        
        
    }
    

}


export const checkLogin = async(req,res) =>{
  
    const {email,password} = req.body

    try {

    const checkEmail = await authModle.findOne({email})

    if(!checkEmail){
        return res.status(404).json({msg:"Invalid Email"})
    }

    const checkPassword = await bcrypt.compare(password,checkEmail.password)
        
     
    if(!checkPassword){
        return res.status(404).json({msg:"Invalid Password"})
    }


    const jwtToken = await jwt.sign({id:checkEmail._id,name:checkEmail.username,email:checkEmail.email},process.env.JWT_SECURE,{expiresIn:"1h"})


    if(!jwtToken){

        return res.status(404).json({msg:"Problem With JWt"})

    }

    res.status(200).json({token:jwtToken})



    } catch (error) {

        console.log('eror',error);
        
        
    }


}



export const getDashBoardInfo = async (req,res)=>{

    //console.log(req);

    try {

        res.status(200).json({Users:req.users})
        
    } catch (error) {

        console.log('error',error);
        
        
        
    }
    

}


export const addProduct = (req,res)=>{


    res.status(200).json({users:{id:1,ProductName:"Iphone"}})

}