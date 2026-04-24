const User = require("../Models/User");

module.exports.renderSignupForm = async (req, res) => {
  res.render("./users/signupUser.ejs");
};

module.exports.postSignup = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
    });
    await User.register(newUser, req.body.password);

    req.login(newUser, (err) => {
      if (err) {
        next(err);
      }
      req.flash("success", "Welcome to Airbnb");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = async (req, res) => {
  res.render("./users/loginUser.ejs");
};

module.exports.postLogin = async (req, res) => {
  req.flash("success", "Welcome to Airbnb");
  const redirectUrl = res.locals.redirectUrl
    ? res.locals.redirectUrl
    : "/listings";
  console.log("ABCD");
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
      return res.redirect("/listings");
    }
    req.flash("success", "You have been successfully logged out!");
    res.redirect("/listings");
  });
};
