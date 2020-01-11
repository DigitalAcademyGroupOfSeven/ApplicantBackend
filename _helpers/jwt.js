const expressJwt = require('express-jwt');
const config = require('config.json');
const applicantService = require('../routes/applicant/applicant.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/applicant/authenticate',
            '/applicant/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const applicant = await applicantService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!applicant) {
        return done(null, true);
    }

    done();
};