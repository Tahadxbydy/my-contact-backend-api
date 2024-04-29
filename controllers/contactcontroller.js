//@desc Get all contacts
//@desc Get /
//@access public
getcontacts = (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw Error("all fields are required");
  }
  res.status(200).json({ message: "get all contacts" });
};

//@desc Get contact
//@desc Get /api/contacts/:id
//@access public
getcontact = (req, res) => {
  //   res.send({ message: "get all contacts" });
  res.status(200).json({ message: `get contact id : ${req.params.id}` });
};

//@desc post contact
//@desc post /api/contacts/:id
//@access public
postcontact = (req, res) => {
  res.status(201).json({ message: `contact created` });
};

//@desc put contact
//@desc put /api/contacts/:id
//@access public
updatecontact = (req, res) => {
  res.status(200).json({ message: `contact updated id: ${req.params.id}` });
};

//@desc delet contact
//@desc delete /api/contacts/:id
//@access public
deletecontact = (req, res) => {
  res.status(200).json({ message: `contact deleted id: ${req.params.id}` });
};

module.exports = {
  getcontacts,
  getcontact,
  updatecontact,
  deletecontact,
  postcontact,
};
