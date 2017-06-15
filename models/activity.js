var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    year: {type: Number, required: true},
    details: {type: String},
    student: {type: Schema.Types.ObjectId, ref: 'Student'}
});

module.exports = mongoose.model('Activity', schema);