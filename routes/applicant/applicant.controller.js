const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')
const applicantService = require('./applicant.service')

module.exports = router;

router.post('/authenticate', authenticate)
router.post('/register', register)

function authenticate(req, res, next){
    applicantService.authenticate(req.body)
        .then(applicant => applicant ? res.json(applicant) : res.status(400).json({message: 'Username or password is incorrect'}))
        .catch(err => next(err))
}

function register(req, res, next){
    applicantService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err))
}

/* POST receive resume. */
router.post('/', function(req, res, next) {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
        if (err) {throw err}

        let file = files.fileKey
        
        fs.readFile(file.path, 'utf-8', (err,data) => {
            if(err) {throw err}

            console.log(data)
        })        
    })
})
