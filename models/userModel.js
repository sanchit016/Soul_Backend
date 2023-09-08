// import mongoose from "mongoose";
const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
    passcode:{
        type:String,
        required: true,
    },
});

const Users = mongoose.model("Users",userModel);

module.exports = Users;