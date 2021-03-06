var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    name: {type: String, required: true},
    text: {type: String, required: true}
});

module.exports = mongoose.model('Comment', schema);