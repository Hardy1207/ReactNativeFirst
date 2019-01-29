import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import * as config from './config/config.json'
import userModel from './modules/user/userModel';
import userValidator from './validators/users'
import { validationResult } from 'express-validator/check';
import { USERS_GET, USERS_CREATE, USERS_DELETE, USERS_UPDATE } from './constants/endpoints'
  
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

app.post(USERS_CREATE, userValidator , function (req, res) {
   const createUser = new User(
        {
        name: req.body.name,
        age: req.body.age
        }
    );
    var errors = validationResult(req);
 
    if (!errors.isEmpty()) {
        res.status(400).json(errors.array());
    } else {
      createUser.save(function(err, newUser){  
          res.status(200).json(newUser._id);
        }
      )
    }
});

app.delete(USERS_DELETE, function (req, res) {
    console.log("delete");
    console.log(req.params.id);
    User.deleteOne({ _id: req.params.id }, function(err) {
        if (!err) {
            res.json(req.body);
        }
        else {
            res.status(400).json(err)
        }
    });
 });

 app.patch(USERS_UPDATE, userValidator, function (req, res) {
        var obj = req.body;
        var id = obj._id;
        console.log(id);
        var errors = validationResult(req);
 
        if (!errors.isEmpty()) {
            res.status(400).json(errors.array());
        } else {
          User.update({_id: id}, obj, {upsert: true}, function (err,doc) {
            if(err) res.status(400).json(err);
            else
            {
                console.log(doc);
                res.status(200).json(doc);
            }
            })    
        }}
    );


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
