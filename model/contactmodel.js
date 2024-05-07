const mongoose = require("mongoose");

contactscheme = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
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
