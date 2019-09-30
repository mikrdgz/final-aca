let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let express = require("express");

const app = express();


app.use(bodyParser.json());

const dbUrl =
  "mongodb+srv://mika:kgubf6gDv63TSgV@cluster0-kro0j.mongodb.net/aca-final?retryWrites=true";

mongoose.connect(dbUrl, { useNewUrlParser: true });

//test

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,

});

var User = mongoose.model('User', userSchema);

var kiley = new User({ 
    name: 'kiley',
  username: 'kl',
  email: 'kiley.lewis@bigcommerce.com',
  password: 1234,
  admin: false,
  isEmailVerified: false,
  
 });

kiley.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

const thePort = 8000;

app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
