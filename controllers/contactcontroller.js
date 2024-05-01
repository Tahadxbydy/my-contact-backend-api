const asycnhandeler = require("express-async-handler");
const contact = require("../model/contactmodel");
// const { connect } = require("mongoose");

//@desc Get all contacts
//@desc Get /
//@access public
getcontacts = asycnhandeler(async (req, res) => {
  console.log(req.body);
  // const { name, email, phone } = req.body;
  // if (!name || !email || !phone) {
  //   res.status(400);
  //   throw Error("all fields are required");
  // }
  contacts = await contact.find();

  res.status(200).json({ contacts });
});

//@desc Get contact
//@desc Get /api/contacts/:id
//@access public
getcontact = asycnhandeler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw Error("id is required");
  }
  const contacts = await contact.findById(id);
  if (!contacts) {
    res.status(404);
    throw Error("contact not found");
  }
  res.status(200).json({ contacts });
});

//@desc post contact
//@desc post /api/contacts/:id
//@access public
postcontact = asycnhandeler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw Error("all feilds are required");
  }
  const contacts = await contact.create({
    name: name,
    email: email,
    phone: phone,
  });
  res.status(201).json({ contacts });
});

//@desc put contact
//@desc put /api/contacts/:id
//@access public
updatecontact = asycnhandeler(async (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  if (!id) {
    res.status(400);
    throw Error("id is required");
  }
  const updatedContact = await contact.findByIdAndUpdate(
    id,
    {
      name,
      email,
      phone,
    },
    { new: true }
  );
  if (!updatedContact) {
    res.status(404);
    throw Error("contact not found");
  }
  res.status(200).json({ updatedContact });
});

//@desc delet contact
//@desc delete /api/contacts/:id
//@access public
deletecontact = asycnhandeler(async (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400);
    throw Error("id is required");
  }
  const deletedcontact = await contact.findByIdAndDelete(id);
  if (!deletedcontact) {
    res.status(404);
    throw Error("contact not found");
  }
  res.status(200).json({ deletedcontact, message: "contact deleted" });
  // res.status(200).json({ message: `contact deleted id: ${req.params.id}` });
});

module.exports = {
  getcontacts,
  getcontact,
  updatecontact,
  deletecontact,
  postcontact,
};
