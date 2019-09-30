import express from 'express';
import graphqlServer from '../graphql';
import { upsertUser } from '../../mongo';
import logs from './logs';

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

app.get('/login', (req, res) => {
  res.send('This would be login');
});

app.get('/logs', logs);

export default () => {
  app.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`Crookshanks is running at ${port}`);
  });
};
