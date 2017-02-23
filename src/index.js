'use strict'
const WomensHealthReq = require('./womens-health-req')

module.exports = class Requisition {
  constructor () {

  }

  build(cb) {
    const whr = new WomensHealthReq()
    whr.build(cb)
  }
}
