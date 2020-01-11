const config = require('../config')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || config.connectionString, {useCreateIndex: true, useNewUrlParser: true})
mongoose.Promise = global.Promise

module.exports = {
    Applicant: require('../routes/applicant/applicant.model')
}