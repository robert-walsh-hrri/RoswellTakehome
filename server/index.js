const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3001;

app.use(express.static(__dirname + '/../public/'));
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

app.get('/products/', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
