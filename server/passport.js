const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const FacebookStrategy = require("passport-facebook");

//GOOGLE AUTH DETAILS
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

//GITHUB AUTH DETAILS
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

// TWITTER AUTH DETAILS
const TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
const TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;
// FACEBOOK AUTH DETAILS
const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
const FACEBOOK_APP_SECRET = process.env.FACEBOOK_APP_SECRET;

// IMPORTING PASSPORT
const passport = require("passport");
// const User = require("./models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });

      //using mongdb you can say
      //   const user = {
      //     username: profile.displayName,
      //     avater: profile.photos[0],
      //   };
      //   user.save();
    }
  )
);
passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });

      //using mongdb you can say
      //   const user = {
      //     username: profile.displayName,
      //     avater: profile.photos[0],
      //   };
      //   user.save();
    }
  )
);

// passport.use(
//   new TwitterStrategy(
//     {
//       consumerKey: TWITTER_CONSUMER_KEY,
//       consumerSecret: TWITTER_CONSUMER_SECRET,
//       callbackURL: "http://127.0.0.1:3000/auth/twitter/callback",
//     },
//     function (accessToken, refreshToken, profile, done) {
//       done(null, profile);
//       //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       //     return cb(err, user);
//       //   });

//       //using mongdb you can say
//       //   const user = {
//       //     username: profile.displayName,
//       //     avater: profile.photos[0],
//       //   };
//       //   user.save();
//     }
//   )
// );
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
      // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
