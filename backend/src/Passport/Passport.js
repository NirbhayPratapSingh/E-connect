const dotenv = require("dotenv");
const passport = require("passport");
const userModel = require('../models/User')
const crypto = require('crypto');

dotenv.config();

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        async function (accessToken, refreshToken, profile, done) {
            let data = await userModel.findOne({ googleId: profile.id });

            if (data) {
                done(null, data);
            } else {
                const password = crypto.randomBytes(6).toString("hex");

                let NewUser = userModel({
                    name: profile.displayName,
                    username: profile.displayName,
                    googleId: profile.id,
                    email: profile.emails[0].value,
                    password
                });

                NewUser.save((err, user) => {
                    if (err) throw err;
                    done(null, user);
                });
            }
        }
    )
);

passport.serializeUser(function (profile, done) {
    done(null, profile);
});

passport.deserializeUser(function (profile, done) {
    done(null, profile);
});
