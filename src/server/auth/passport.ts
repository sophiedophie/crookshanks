import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { googleAuth as googleAuthParams } from '../../../.secret';

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((object, done) => {
  done(null, object);
});

passport.use(new GoogleStrategy(googleAuthParams, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken, profile)
  process.nextTick(() => {
    return done(null, profile);
  });
}));

export default passport;
