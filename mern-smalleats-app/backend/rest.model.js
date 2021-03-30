const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rest = new Schema({
    name: {
        type: String
    },
    rest_cuisine: {
        type: String
    },
    rest_rating: {
        type: String
    },
    rest_menu: {
        type: String
    },
    rest_cost: {
        type: String
    }

});

module.exports = mongoose.model('Rest', Rest);