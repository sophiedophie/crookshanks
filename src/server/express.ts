import express from 'express';
import { upsertUser } from '../mongo';

const app = express();
const router = express.Router();
const port = 4000;

app.get('/', (req, res) => {
  console.log(req)
  const testVal = {
    name: 'admin',
    avatar: 'null',
    loginType: 'google',
  };

  const user = upsertUser(testVal);

  console.log(user.name)
  res.send('done?');
});

router.get('/search', (req, res) => {
  res.send('This would be search');
});

router.get('/login', (req, res) => {
  res.send('This would be login');
});

router.get('/logs', (req, res) => {
  res.send('This would be book logs');
});

router.get('/logs/edits/:log_id', (req, res) => {
  res.send('Should return the info of logs');
});

export default () => {
  app.listen(port, (err) => {
    if (err) console.error(err);
    console.log(`Crookshanks is running at ${port}`);
  });
};
