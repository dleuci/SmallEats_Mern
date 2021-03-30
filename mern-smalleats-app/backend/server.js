const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const restRoutes = express.Router();
const PORT = 4000;

//importt schema for backend
let Rest = require('./rest.model');


app.use(cors());
app.use(bodyParser.json());

//rests is name of db
mongoose.connect('mongodb://127.0.0.1:27017/rests', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//1st end point
restRoutes.route('/').get(function(req, res) {
    Rest.find(function(err, rests) {
        if(err) {
            console.log(err);
        } else {
            res.json(rests);
        }
    });
});

//2nd end point
restRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Rest.findById(id, function(err, rest){
        res.json(rest);
    });
});


restRoutes.route('/add').post(function(req, res) {
    let rest = new Rest(req.body);
    rest.save()
        .then(rest => {
            res.status(200).json({'rest': 'rest added succesfully'});
        })
        .catch(err => {
            res.status(400).send('adding new rest failed');
        });
});

restRoutes.route('/update/:id').post(function(req, res) {
    Rest.findById(req.params.id, function(err, rest) {
        if(!rest)
            res.status(404).send('data is not found');
        else
            rest.rest_name = req.body.rest_name;
            rest.rest_cuisine = req.body.rest_cuisine;
            rest.rest_price = req.body.rest_price;
            rest.rest_rating = req.body.rest_rating;
            rest.rest_menu = req.body.rest_menu;

            rest.save().then(rest => {
                res.json('Rest updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/rests', restRoutes);


app.listen(PORT, function() {
    console.log("Server running on Port: " + PORT);
});

