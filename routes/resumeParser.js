const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')

/* POST receive resume. */
router.post('/', function(req, res, next) {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
        if (err) {throw err}

        let file = files.fileKey

        axios.post('http://127.0.0.1:5000/process', req.body)
        .then((res) => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
        })
        .catch((error) => {
            console.error(error)
        })   
    })
});

router.post('/result', function(req, res, next) {
    
});

module.exports = router;
