const mongoose = require("mongoose");

user = mongoose.Schema(
  {
    userName: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      required: "Email is required",
    },
    password: {
      type: String,
      required: "Password is required",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", user);
