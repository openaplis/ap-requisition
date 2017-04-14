'use strict'

const path = require('path')
const gynCytologyReq = require('./core/gyn-cytology-req.js')
const surgicalReq = require('./core/surgical.js')
const oncologyReq = require('./core/oncology.js')

exports = module.exports = {
    gynCytologyReq: gynCytologyReq,
    surgicalReq: surgicalReq,
    oncologyReq: oncologyReq
}
