const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')
const axios = require('axios')
const FormData = require('form-data')

/* POST receive resume. */
router.post('/', function(req, res, next) {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
        if (err) {throw err}
        
        let file = files.fileKey

        var formData = new FormData()
        formData.append('file', fs.createReadStream(file.path))
        axios.post('http://127.0.0.1:5000/process', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res) => {
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
