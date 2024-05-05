const express = require("express");
const {
  loginController,
  registerController,
  currentUserInfoController,
} = require("../controllers/userControllers");
const verifyTocken = require("../middleware/verifyTocken");
const router = express.Router();

router.post("/login", loginController);

router.post("/register", registerController);

router.get("/currentuserinfo", verifyTocken, currentUserInfoController);

module.exports = router;
