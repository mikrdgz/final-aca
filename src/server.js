let express = require("express")

let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();


//user route
var users = require('./routes/users');


app.use(express.static("public"));

app.use(bodyParser.json());

app.use(users)

const dbUrl =
  "mongodb+srv://mika:kgubf6gDv63TSgV@cluster0-kro0j.mongodb.net/aca-final?retryWrites=true";

mongoose.connect(dbUrl, { useNewUrlParser: true });




const thePort = 3000;

app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});

