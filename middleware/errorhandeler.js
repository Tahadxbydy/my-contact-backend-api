const errorconstants = require("../constant/errorconstants");

const errohandeler = (req, res, err, next) => {
  const statuscode = res.statusCode ? res.statusCode : 500;
  switch (statuscode) {
    case errorconstants.validation_error:
      res
        .status(statuscode)
        .json({ title: "validation failed", message: err.message });

      break;

    case errorconstants.internal_server_error:
      res
        .status(statuscode)
        .json({ title: "internal server error", message: err.message });

      break;
    case errorconstants.forbiden:
      res.status(statuscode).json({ title: "forbiden", message: err.message });

      break;
    case errorconstants.not_found:
      res.status(statuscode).json({ title: "notfound", message: err.message });

      break;
    case errorconstants.unauthorized:
      res
        .status(statuscode)
        .json({ title: "unauthorized", message: err.message });

      break;

    default:
      console.log("no error");
      break;
  }
};

module.exports = errohandeler;
