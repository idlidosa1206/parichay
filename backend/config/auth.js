const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config();
const User = require("../models/userModel.js");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    (req, accessToken, refreshToken, profile, done) => {
      // Add req as the first parameter
      // Passport callback function
      console.log("Passport callback function fired");
      console.log("Access token:", accessToken);
      console.log("Refresh token:", refreshToken);
      console.log("Profile:", profile);

      // Check if there's an error
      if (!accessToken) {
        return done(new Error("Access token is missing or unauthorized"));
      }

      User.findOne({ googleId: profile.id })
        .then((currentUser) => {
          
            // Create a new user
            new User({
              username: profile.displayName,
              googleId: profile.id,
            })
              .save()
              .then((newUser) => {
                console.log("New user created:", newUser);
                // Save the session after creating a new user
                req.session.save(() => {
                  done(null, newUser);
                });
              })
              .catch((err) => {
                console.error("Error creating new user:", err);
                done(err, null);
              });
          
        })
        .catch((err) => {
          console.error("Error finding user:", err);
          done(err, null);
        });
    }
  )
);
