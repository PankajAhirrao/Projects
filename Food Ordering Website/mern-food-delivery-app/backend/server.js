import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// import express, cors, connectDB, routes, dotenv — basic setup.
// app.use(express.json()) — allow JSON body parsing.
// app.use(cors()) — allow cross-origin requests (permissive; consider configuring origin).
// connectDB() — opens MongoDB connection.
// app.use("/api/food", foodRouter) — mount food routes.
// app.use("/images", express.static('uploads')) — exposes uploads folder at /images/<file>.
// app.listen(port) — start server on port 4000.




//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get("/",(req,res)=>{
        res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/?