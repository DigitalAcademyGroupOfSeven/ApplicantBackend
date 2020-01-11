const config = require('config.json')
const jwt = require('jsonwebtoken')
const bcrpt = require('bcryptjs')
const db = require('_helpers/db')
const Applicant = db.Applicant

module.export = {
    authenticate,
    create
}

async function authenticate({username, password}) {
    const applicant = await Applicant.findOne({ username })
    if(applicant && bcrpt.compareSync(password, applicant.hash)){
        const {hash, ...userWithoutHash} = applicant.toObject();
        const token = jwt.sign({sub:applicant.id}, config.secret)
        return {
            ...userWithoutHash,
            token
        }
    }
}

async function create(applicantParam){
    if(await Applicant.findOne({username: applicantParam.username})){
        throw 'Username "' + applicantParam.username + '" is already taken'
    }

    const applicant = new Applicant(applicantParam)

    if(applicantParam.password){
        applicant.hash = bcrypt.hashSync(applicantParam.password, 10)
    }

    await applicant.save();
}