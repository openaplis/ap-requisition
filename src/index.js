'use strict'

const gynCytologyReq = require('./core/gyn-cytology-req.js')
const surgicalReq = require('./core/surgical.js')
const oncologyReq = require('./core/oncology.js')
const ihcReq = require('./core/ihc.js')
const researchTestingReq = require('./core/research-testing.js')

exports = module.exports = {
  gynCytologyReq: gynCytologyReq,
  surgicalReq: surgicalReq,
  oncologyReq: oncologyReq,
  ihcReq: ihcReq,
  researchTestingReq: researchTestingReq
}
