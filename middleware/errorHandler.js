const errorconstants = require("../constant/errorConstants");

const errohandeler = (err, req, res, next) => {
  const statuscode = res.statusCode || errorconstants.internal_server_error;
  switch (statuscode) {
    case errorconstants.validation_error:
      res
        .status(statuscode)
        .json({ title: "Validation Failed", message: err.message });

      break;

    case errorconstants.internal_server_error:
      res
        .status(statuscode)
        .json({ title: "Internal Server Error", message: err.message });

      break;
    case errorconstants.forbiden:
      res.status(statuscode).json({ title: "Forbiden", message: err.message });

      break;
    case errorconstants.not_found:
      res.status(statuscode).json({ title: "Not Found", message: err.message });

      break;
    case errorconstants.unauthorized:
      res
        .status(statuscode)
        .json({ title: "Unauthorized", message: err.message });

      break;

    default:
      console.log("no error");
      break;
  }
};

module.exports = errohandeler;
