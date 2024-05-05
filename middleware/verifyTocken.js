const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

verifyTocken = asyncHandler((req, res, next) => {
  let token;
  const header = req.headers.Authorization || req.headers.authorization;
  if (header && header.startsWith("Bearer")) {
    token = header.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          res.status(401);
          throw Error(err.message);
        } else {
          req._id = decoded._id;
          next();
        }
      });
    } else {
      res.status(401);
      throw Error("Provide an Auth token");
    }
  } else {
    res.status(401);
    throw Error("Provide an Auth token");
  }
});

module.exports = verifyTocken;
