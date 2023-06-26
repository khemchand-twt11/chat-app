const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcyprt = require("bcrypt");
const login = async (req, res) => {};
require("dotenv").config();
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  //generated confirmation token
  const token = jwt.sign({ email }, process.env.SECRET);

  const ifUserExists = await UserModel.findOne({ email });

  //checking if user exists
  if (ifUserExists) {
    return res.send("User already registered");
  } else {
    const user = new UserModel({
      username,
      email,
      password: bcyprt.hashSync(password, 8),
      confirmationCode: token,
    });
    await user.save();
    res.status(201).send({ msg: "User registered successfully", user });
  }
};

module.exports = { login, signup };
