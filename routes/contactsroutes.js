const express = require("express");
const router = express.Router();
const verifyTocken = require("../middleware/verifyTocken");
const {
  getcontacts,
  getcontact,
  updatecontact,
  deletecontact,
  postcontact,
} = require("../controllers/contactcontroller");

router
  .route("/")
  .get(verifyTocken, getcontacts)
  .post(verifyTocken, postcontact);

router
  .route("/:id")
  .get(verifyTocken, getcontact)
  .put(verifyTocken, updatecontact)
  .delete(verifyTocken, deletecontact);

module.exports = router;
