var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true},
    img: {type: String},
    caption: {type: String},
    description: {type: String},
    details: {type: Object},
    schoolName: {type: String, required: true},
    classYear: {type: String, required: true},
    key: {type: String, required: true},
    media: [{type: Schema.Types.ObjectId, ref: 'Media'}],
    invites: [{type: Schema.Types.ObjectId, ref: 'Invite'}],
    approvedUsers: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Student', schema);