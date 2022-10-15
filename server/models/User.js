const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, unique: false, required: true },
  username: { type: String, unique: true, required: true },
  phone: { type: Number, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  country: { type: String, unique: false, required: true },
  gender: { type: String, unique: false, required: true },
  password: { type: String, unique: false, required: true },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
