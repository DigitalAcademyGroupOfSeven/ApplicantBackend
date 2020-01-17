const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    username: {type: String, unique: true, required: true},
    hash: {type: String, required:true},
    name: {type: String},
    lastName: {type: String},
    email: {type: String},
    skills: [{type: String}],
    mobile_number: {type: String},
    experience: [{type: String}],
    college_name: {type: String},
    company_names: [{type: String}],
    degree: [{type: String}],
    designation: [{type: String}],
    total_experience: {type: String},

})

schema.set('toJSON', {virtuals: true})

module.exports = mongoose.model("Applicant", schema)