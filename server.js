const express = require("express");
const errohandeler = require("./middleware/errorHandler.js");
const connectdb = require("./config/dbconnection.js");
const dotenv = require("dotenv").config();

const app = express();

connectdb();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoutes.js"));
app.use("/api/users", require("./routes/usersRoutes.js"));
app.use(errohandeler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
