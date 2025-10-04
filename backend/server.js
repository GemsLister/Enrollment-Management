import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

// db
import connectDB from './config/db.js'

// routes
import loginRoute from './routes/loginRoute.js'

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const port = 8000;

app.use('/api/login', loginRoute);


app.listen(port, () => {
    console.log(`Server running: ${port}`);
})
