const mongoose = require("mongoose");

user = mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
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
