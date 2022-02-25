require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require('../models/user.model');

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const register = 
    async (req, res) => {
    try {
        // we will try to find the user with the email provided
        let user =  await User.findOne({ email: req.body.email }).lean().exec();

        // if the user found then it's an error
        if (user) {
            return res.status(400).send({ message: "User already exists" });
        }

        // if not found then we will create a new user with the email and the password provided
        user =  await User.create(req.body);

        // we will hash the password to make it more secure
        /* created in user model */

        // then we will cretae the TOKEN for that user and
        const token = newToken(user);

        // return the user and the token
        return res.send({user, token});
    } catch (err) {
        res.status(500).send(err.message);
    }
};


const login = async (req, res) => {
    try {
        // we will try to find the user with the email provided
        const user = await User.findOne({ email: req.body.email });

        // If user not found then return error
        if (!user) return res.status(400).send({ message: "Incorrect email or password" });
        
        // If user is found then we will match the password
        const match = user.checkPassword(req.body.password);

        if(!match) return res.status(400).send({ message: "Incorrect email or password" });

        // then we will cretae the TOKEN for that user and
        const token = newToken(user);

        // return the user and the token
        return res.send({user, token});
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = { register, login, newToken };