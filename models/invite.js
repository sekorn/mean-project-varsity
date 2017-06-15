var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    email: {type: String, required: true},
    student: {type: Schema.Types.ObjectId, ref: 'Student', required: true},
    emailSent: {type: Boolean, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Invite', schema);