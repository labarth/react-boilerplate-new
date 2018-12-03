const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/getUsername', (req, res) => res.send({ username: 'Alexander Matiugin' }));
app.post('/api/test', (req, res) => {
  console.log(req);
  res.send({ test: req.body })
});
app.listen(3000, () => console.log('Listening on port 3000!'));