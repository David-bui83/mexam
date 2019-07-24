const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

mongoose.connect('mongodb://localhost/movies',{useNewUrlParser:true});
const modelPath = path.join(__dirname,'./../models');
fs.readdirSync(modelPath).forEach(file=>{
  require(modelPath + '/' + file);
});