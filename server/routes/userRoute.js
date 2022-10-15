const User = require("../models/User");

const Router = require("express").Router();

Router.post("/register", async (req, res) => {
  const { name, username, phone, email, country, password, passwordConfirm } =
    req.body;

  const newUser = User({
    name,
    username,
    phone,
    email,
    password,
    passwordConfirm,
    country,
  });

  try {
    const saveNewUser = await newUser.save();
    res.status(200).json(saveNewUser);
    console.log(saveNewUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = Router;
