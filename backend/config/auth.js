const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
require('dotenv').config();
const User = require('../models/userModel.js')

passport.use(
    new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, profile, done) => {
        // Passport callback function
        console.log("Passport callback function fired");
        console.log("Access token:", accessToken);
        console.log("Refresh token:", refreshToken);
        console.log("Profile:", profile);
        
        // Check if there's an error
        if (!accessToken) {
            return done(new Error('Access token is missing or unauthorized'));
        }

        // Your user creation logic here
        new User({
            username: profile.displayName,
            googleId: profile.id
        }).save().then((newUser) => {
            console.log('New user created:', newUser);
            return done(null, newUser); // Pass the user to Passport
        }).catch(err => {
            console.error('Error creating new user:', err);
            return done(err); // Return the error to Passport
        });
    })
);
