const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

// Initialize passport and use the Google strategy
passport.use(
  new GoogleStrategy(
    {
      clientID:
        513192996104 -
        mg2cvtpdlvjh7fqmpnbg6kusbkkdb5dl.apps.googleusercontent.com,
      clientSecret: GOCSPX - mZ6oUAYeaHY - gmkWeiGcf - RzvDL9,
      callbackURL: "/hh.html",
    },
    (accessToken, refreshToken, profile, done) => {
      // Here, you can save the user's profile data in your database or perform other actions.
      return done(null, profile);
    }
  )
);

// Set up the routes for authentication
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Redirect to another page after successful authentication.
    res.redirect("/dashboard");
  }
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
