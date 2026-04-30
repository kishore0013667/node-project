import mongoose from "mongoose";



const authSchema = new mongoose.Schema({
    username:String,
    email:{type:String,unique:true},
    password:String
},{timestamps:true})


const authModle = mongoose.model("authdatas",authSchema)

export default authModle