const express = require('express')
const router = express.Router()
const formidable = require('formidable')
const fs = require('fs')

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
});

router.post('/result', function(req, res, next) {
    
});

module.exports = router;
