const express = require("express");
const errohandeler = require("./middleware/errorhandeler.js");
const connectdb = require("./config/dbconnection");
const dotenv = require("dotenv").config();

const app = express();

connectdb();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactsroutes"));
app.use(errohandeler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
