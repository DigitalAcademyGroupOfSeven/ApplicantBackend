const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    username: {Type: String, unique: true, required: true},
    hash: {Type: String, required:true},
    firstName: {Type: String, required: true},
    lastName: {Type: String, required: true},
    email: {Type: String, required: true}
})

schema.set('toJSON', {virtuals: true})

module.exports = mongoose.model("Applicant", schema)