const express = require('express')
const router = express.Router()
const axios = require('axios')
const xml = require('xml')

router.get('/:id', async function(req, res, next) {
    let orcid = req.params.id
    res.set('Content-Type', 'text/xml');
    res.send(await getOrcidRecord(orcid))
});

async function getOrcidRecord(id){
    try{
        const apiRequest = await axios.get('https://pub.orcid.org/v2.1/'+id+'/record', { 'headers': {'Authorization': 'Bearer ***REMOVED***'}})
        return apiRequest.data
    } catch(err){
        console.error(err)
    }
}

module.exports = router;
