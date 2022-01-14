const { selectUser } = require("../models/users.models");

exports.getUser = (req, res, next) => {
  const { username } = req.body;
  selectUser(username)
    .then((user) => {
      res.redirect("/");
    })
    .catch((err) => next(err));
};
