const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const userModel = require('./models/user');
require('dotenv').config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env['GOOGLE_KEY'],
      clientSecret: process.env['GOOGLE_SECRET_KEY'],
      callbackURL: 'https://voicecloud.herokuapp.com/signin/google/callback', //http://127.0.0.1:3001
    },
    async (accessToken, refreshToken, userGoogle, done) => {
      const user = await userModel.findOne({ raw: true, where: { email: userGoogle.emails[0].value } });
      if (!user) {
        return userModel
          .create({
            email: userGoogle.emails[0].value,
            name: userGoogle.name.givenName,
            surname: userGoogle.name.familyName,
            avatar: userGoogle.photos[0].value,
          })
          .then((res) => {
            return done(null, res.dataValues);
          });
      }
      return done(null, user);
    },
  ),
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
