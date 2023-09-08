const dotenv = require("dotenv");
const express = require("express");
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/userRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log( "Backend Started");
});
connectDB();

app.use('/users',userRouter);

app.get("/",(req,res)=>{
   res.send({
        "success":true,
        "statusCode": 200,
        "message" : 'Server is Running',
        "data" : {}
    });
});


