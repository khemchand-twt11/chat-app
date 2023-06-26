const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
