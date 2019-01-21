var express =require('express');
const bodyParser =require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
  
// установка схемы
const userScheme = new Schema({
    name: String,
    age: Number
});
  
// подключение
mongoose.connect("mongodb://localhost:27017/TaskDB", { useNewUrlParser: true });

var conn = mongoose.connection;

const User = mongoose.model("Users", userScheme);
const user = new User({
    name: "Chuck",
    age: 41
});
  
 user.save(function(err){
    // mongoose.disconnect();  // отключение от базы данных
      
    if(err) return console.log(err);
}); 
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/api/users/get', function (req, res) {
    User.findOne({ name: 'Chuck' }, function(err, doc){
        if(err) return handleError(err);
        else
        {
            res.json(doc);
        }
        })
});

app.post('/api/users/create', function (req, res) {
   console.log(req.body);
   res.json(req.body);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
