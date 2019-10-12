import express from 'express';
import graphqlServer from '../graphql';
import passport from '../auth/passport';

const app = express();
const port = 4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:1234");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(passport.initialize());
app.use(passport.session());

// Wrap Express with Graphql
graphqlServer.applyMiddleware({ app, path: '/graphql' });

app.get('/', async (req, res) => {
  res.send('haha');
});

app.get('/search', (req, res) => {
  res.send('This would be search');
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile'],
}));

app.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login',
}), (req, res) => {
  res.redirect('/');
});

app.get('/logs', (req, res) => {
  res.send('logs')
});

export default () => {
  app.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`Crookshanks is running at ${port}`);
  });
};
