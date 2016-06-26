// This is the friend.js file located at /server/models/friend.js
// We want to create a file that has the schema for our friends and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create our friendSchema
var SurveySchema = new mongoose.Schema({
  name: {type: String, required:true},
  question:{type:String,required:true},
  o1: {type:String,required :true},
  o2: {type:String,required :true},
  o3: {type:String,required :true},
  o4: {type:String,required :true},
  o1_count: {type:Number,required :true},
  o2_count: {type:Number,required :true},
  o3_count: {type:Number,required :true},
  o4_count: {type:Number,required :true}
},{timestamps: true});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)
mongoose.model('Survey', SurveySchema);
// notice that we aren't exporting anything -- this is because this file will be run when we require it using our config file and then since the model is defined we'll be able to access it from our controller
