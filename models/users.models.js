const users = [{ username: "bob", password: "password" }];

exports.selectUserByUsername = (username) => {
  let user = users.filter((user) => {
    return username === user.username;
  })[0];
  if (user) {
    // yay!
    console.log("user correct!");
    return Promise.resolve(user);
  } else if (!user) {
    console.log(user, "user not found");
    // user not found
    return Promise.reject({ status: 404, msg: "invalid username" });
  }
};
