var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    author: {type: String, required: true},
    text: {type: String, required: true}
});

module.exports = mongoose.model('Article', schema);
