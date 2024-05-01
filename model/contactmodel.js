const mongoose = require("mongoose");

contactscheme = mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      required: "Email is required",
    },
    phone: {
      type: String,
      required: "Phone number is required",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contacts", contactscheme);
