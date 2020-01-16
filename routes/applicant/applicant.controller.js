const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')
const applicantService = require('./applicant.service')
const axios = require('axios')

module.exports = router;

router.post('/authenticate', authenticate)
router.post('/register', register)
router.post('/process', process)
router.put('/:id', update)

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

function process(req,res,next){
    axios.post('http://127.0.0.1:5000/process', req.body)
    .then((res) => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
    })
    .catch((error) => {
        console.error(error)
    })
}

function update(req, res, next) {
    applicantService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
