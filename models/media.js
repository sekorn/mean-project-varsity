var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    itemType: {type: String, required: true},
    details: {type: String},
    url: {type: String},
    student: {type: Schema.Types.ObjectId, ref: 'Student'}
});

module.exports = mongoose.model('Media', schema);