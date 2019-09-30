import express from 'express';
import graphqlServer from '../graphql';
import passport from '../passport';

const app = express();
const port = 4000;

// Wrap Express with Graphql
graphqlServer.applyMiddleware({ app });

app.get('/', async (req, res) => {
  res.send('haha');
});

app.get('/search', (req, res) => {
  res.send('This would be search');
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile'],
}));

app.get('/auth/google/redirect', passport.authenticate('google', {
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
