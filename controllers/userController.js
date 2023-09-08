const Users = require("../models/userModel")

const signup = async (req,res)=>{
    const email = req.body.email.toLowerCase();
    const passcode = req.body.passcode;

    const user = await Users.findOne({email: email});

    if(user){
        if(passcode==user.passcode){
            res.status(200).send({
                "success" : true,
                "statusCode" : 200,
                "message" : "User Exists",
                "data" : [{key:user.id}],
            });
        }
        else{

        }
    }
    else{
        const user = new Users({email:email,passcode:passcode});
        
        try{
            const newUser=await Users.create(user);
            res.status(200).send({
                "success" : true,
                "statusCode" : 200,
                "message" : "User Created",
                "data" : [{key:newUser.id}],
            });
        }
        catch(err){
            res.status(400).send({
                "success" : false,
                "statusCode" : 400,
                "message" : "Wrong Password",
                "data" : [],
            });
        }
    }
}



const deleteUser = async (req,res)=>{
    const id = req.header("uid");
    console.log(id);
    if(id){
        const user = await Users.findOneAndDelete({_id:id});
        if(user){
            res.status(200).send({
                "success" : true,
                "statusCode" : 200,
                "message" : "User Deleted",
                "data" : [],
            });
        }
        else{
            res.status(400).send({
                "success" : true,
                "statusCode" : 200,
                "message" : "Header not correct",
                "data" : [],
            });
        }
    }
    else{
        res.status(400).send({
            "success" : false,
            "statusCode" : 400,
            "message" : "User not LoggedIn",
            "data" : [],
        });
    }
}

const getUser = async (req,res)=>{
    const id = req.header("uid");
    console.log(id);
    if(id){
        const user = await Users.findById(id);
        if(user){
            res.status(200).send({
                "success" : true,
                "statusCode" : 200,
                "message" : "User Fetched",
                "data" : [user],
            });
        }
        else{
            res.status(400).send({
                "success" : true,
                "statusCode" : 200,
                "message" : "Header not correct",
                "data" : [],
            });
        }
    }
    else{
        res.status(400).send({
            "success" : false,
            "statusCode" : 400,
            "message" : "User not LoggedIn",
            "data" : [],
        });
    }
}

module.exports = {
    signup,
    getUser,
    deleteUser
}