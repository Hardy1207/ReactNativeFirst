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
const user = new User(
    {
    name: "Chuck",
    age: 41
    }
);
  
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
    User.find({}, function(err, doc){
        if(err) return handleError(err);
        else
        {
            console.log(doc);
            res.json(doc);
        }
        })
});

app.post('/api/users/create', function (req, res) {
   const createUser = new User(
        {
        name: req.body.name,
        age: req.body.age
        }
    );
    createUser.save(function(err, newUser){      
    if(err) return console.log(err);
    else {
        console.log(newUser._id);
        res.json(newUser);
    }
    }); 
   
});

app.delete('/api/users/delete/:id', function (req, res) {
    console.log("delete");
    console.log(req.params.id);
    User.deleteOne({ _id: req.params.id }, function(err) {
        if (!err) {
            console.log("good work Pasha");
        }
        else {
            console.log("error");
        }
    });
    res.json(req.body);
 });

 app.patch('/api/users/update/:id', function (req, res) {
        var obj = req.body;
        var id = obj._id;
        console.log(id);
        if (id) {
        User.update({_id: id}, obj, {upsert: true}, function (err,doc) {
            if(err) return handleError(err);
            else
            {
                console.log(doc);
                res.json(doc);
            }
            })    
        }}
    );


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
