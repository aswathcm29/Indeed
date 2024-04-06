const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})

app.get('/',(req,res)=>{
    res.status(200).send('Backend Running')
})

app.use('/users', userRoutes);

try{
    const connect = async()=>{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Database connected')
    }
    connect();
}catch(err){
    console.log(err.message)
}