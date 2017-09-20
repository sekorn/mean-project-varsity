var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    student: {type: Schema.Types.ObjectId, ref: 'Student'}
});

module.exports = mongoose.model('User', schema);