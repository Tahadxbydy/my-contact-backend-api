const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const connect = await mongoose.connect(process.env.connectionstring);
    console.log(
      "database connection established :",
      connect.connection.host,
      connect.connection.db.databaseName
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectdb;
