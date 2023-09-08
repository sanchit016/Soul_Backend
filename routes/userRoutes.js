const express = require("express");
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post('/signup',userController.signup);

userRouter.delete('/',userController.deleteUser);

userRouter.get('/',userController.getUser);

module.exports = userRouter;