const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    username: {type: String, unique: true, required: true},
    hash: {type: String, required:true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    skills: [{type: String}],
    mobile_number: {type: String},
    experience: [{type: String}]
})

schema.set('toJSON', {virtuals: true})

module.exports = mongoose.model("Applicant", schema)