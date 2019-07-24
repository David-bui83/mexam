const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const reviewsSchema = new mongoose.Schema({
  name:{type:String,required:[true,'Name is required'],minlength:[3,'Name must be at least 3 characters']},
  rating:{type:Number,required:[true,'Must have a rating'],min:[1,'Rating cannot be lower than 1'],max:[5,'Rating cannot be greater than 5']},
  review:{type:String,required:[true,'Review must have at least 3 characters']}
},{timestamps:true});
mongoose.model('Reviews',reviewsSchema);

const moviesSchema = new mongoose.Schema({
  title:{type:String,required:[true,'Need to have a title'],minlength:[3,'Title must be at least 3 characters'],unique:true},
  name:{type:String,required:[true,'Need to have your name'],minlength:[3,'Name must be at least 3 characters']},
  rating:{type:Number,required:[true,'Must have a rating'],min:[1,'Rating cannot be lower than 1'],max:[5,'Rating cannot be greater than 5']},
  review:{type:String,required:[true,'Review must have at least 3 characters']},
  reviews:[reviewsSchema]
},{timestamps:true});

moviesSchema.plugin(uniqueValidator,{message:'Movie has already been added'});
mongoose.model('Movies',moviesSchema);