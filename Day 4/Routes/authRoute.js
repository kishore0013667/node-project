import express from "express"
import { authData,getParams,quaryData,headers } from "../Controller/authController.js"


const route = express.Router() 

route.post("/user",authData)
route.get("/paramsuser/:useerid",getParams)
route.get("/quaryData",quaryData)
route.get("/headers",headers)

export default route

//http://Localhost:5000/api/auth/user

//http://Localhost:5000/api/auth/paramsuser

//http://Localhost:5000/api/auth/quaryData