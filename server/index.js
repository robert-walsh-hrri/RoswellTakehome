const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../public/'));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());
// app.use(cors());

app.get('/products/', (req, res) => {

  axios.get('http://localhost:3000/products/').then((results) => {
      res.send(results.data);
  }).catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
