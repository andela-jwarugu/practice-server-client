const express = require('express');
const app = express();
const routes = require('./server/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

app.listen(3000, function(){
  console.log('App listening on port 3000');
})
