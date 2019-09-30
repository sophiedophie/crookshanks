import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((object, done) => {
  done(null, object);
});

const params = {
  clientID: '',
  clientSecret: '',
  callbackURL: 'http://sophiedophie.dev/google/callback', 
}

passport.use(new GoogleStrategy(params, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken, refreshToken, profile)
  process.nextTick(() => {
    return done(null, profile);
  });
}));

export default passport;
