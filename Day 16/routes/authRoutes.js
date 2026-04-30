import express from 'express'
import { checkLogin, getDashBoardInfo, addProduct,insertDatas } from '../controllers/authController.js'
import {checkToken} from '../middlewares/validation.js'

// http://localhost:5000/api/auth/login
// http://localhost:5000/api/auth/dashboard
// http://localhost:5000/api/auth/addroduct
const routes = express.Router()

routes.post('/register',insertDatas)
routes.post('/login',checkLogin)

routes.get('/dashboard',checkToken,getDashBoardInfo)
routes.get('/addroduct',checkToken,addProduct)
export default routes