const express = require("express");
const router = express.Router();
const {
  getcontacts,
  getcontact,
  updatecontact,
  deletecontact,
  postcontact,
} = require("../controllers/contactcontroller");

router.route("/").get(getcontacts).post(postcontact);

router.route("/:id").get(getcontact).put(updatecontact).delete(deletecontact);

module.exports = router;
