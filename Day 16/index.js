import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import connectDB from './config/db.js'

dotenv.config()

const app = express()

connectDB()
app.use(cors())
app.use(express.json())

app.use("/api/auth",authRoutes)

const PORT = process.env.PORT || 4000


app.listen(PORT,()=>{
console.log(`Server Connected http://localhost:${PORT}`);

})


// http://localhost:5000/api/auth