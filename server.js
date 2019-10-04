let express = require("express")

let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let app = express();


//user route
var users = require('./src/routes/users');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(function(req,res,next){
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(users)

const dbUrl =
  "mongodb+srv://mika:kgubf6gDv63TSgV@cluster0-kro0j.mongodb.net/aca-final?retryWrites=true";

mongoose.connect(dbUrl, { useNewUrlParser: true });


const thePort = 5000;

app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});

