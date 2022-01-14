const { selectUserByUsername } = require("../models/users.models");

module.exports = (req, res, next) => {
  console.log("in login");
  const { username, password } = req.body;
  console.log(username, password);
  selectUserByUsername(username)
    .then((user) => {
      if (user.password !== password) {
        // Incorrect password: unauthorised
        return Promise.reject({ status: "401", msg: "incorrect password" });
      } else {
        // password match!
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};
