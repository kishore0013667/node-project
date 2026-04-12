import express from "express"
import dotenv from 'dotenv'
import cors from 'cors'
import authRoute from './route/authRoute.js'

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use("/app/auth,authRoute")

app.listen(PORT,()=>{
    console.log(`Server Running on http://Localhost:${PORT}`);

})

//http://Localhost:5000/api/auth