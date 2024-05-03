const asyncHandler = require("express-async-handler");
const userschema = require("../model/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw Error("All Fields are required");
  }

  const user = await userschema.findOne({
    email: email,
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      {
        _id: user.id,
        userName: user.userName,
        email: user.email,
      },
      process.env.SECRET_KEY,
      { expiresIn: "30s" }
    );
    res.status(200).json({
      title: "Authentication successful",
      userName: user.userName,
      email: user.email,
      token: token,
    });
  } else {
    res.status(404);
    throw Error("Invalid Credentials");
  }
});

registerController = asyncHandler(async (req, res) => {
  const { email, password, userName } = req.body;
  if (!email || !password || !userName) {
    res.status(401);
    throw Error("All Fields are required");
  }
  const isAvailable = await userschema.findOne({
    email: email,
  });
  if (isAvailable) {
    res.status(401);
    throw Error("Email already Exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userschema.create({
    userName: userName,
    email: email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      username: user.userName,
      email: user.email,
      createdAt: user.createdAt,
    });
  } else {
    res.status(500);
    throw Error("SomeThing Went Wrong");
  }
});

module.exports = {
  loginController,
  registerController,
};
