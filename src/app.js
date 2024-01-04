const express = require('express')


const  mongoose = require('mongoose')
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://localhost:27017/cache', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./routes')(app)

app.listen (3000, () =>{
  console.log('listening on port 3000')
})