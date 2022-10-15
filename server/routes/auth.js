const Router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:5000";

Router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: "true",
      message: "successful",
      user: req.user,
      // cookies: req.cookies,
    });
  }
});

Router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

Router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect(CLIENT_URL);
  });
});

Router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
Router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
Router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
Router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
Router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);
Router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = Router;
