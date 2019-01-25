import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as config from './config/config.json'
import userModel from './modules/user/userModel';
import { USERS_GET, USERS_CREATE, USERS_DELETE, USERS_UPDATE } from './constants/endpoints'
  

// mongoose.connect("mongodb://localhost:27017/TaskDB", { useNewUrlParser: true });
mongoose.connect(config.DB.DB_HOST, config.DB.DB_CONFIG);

var conn = mongoose.connection;

const User = userModel;
  
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get(USERS_GET, function (req, res) {
    User.find({}, function(err, doc){
        if(err) return handleError(err);
        else
        {
            res.json(doc);
        }
        })
});

app.post(USERS_CREATE, function (req, res) {
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
        console.log("good work");
        res.json(newUser);
    }
    }); 
   
});

app.delete(USERS_DELETE, function (req, res) {
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

 app.patch(USERS_UPDATE, function (req, res) {
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
