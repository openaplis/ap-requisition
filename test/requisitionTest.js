const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const requisitions  = require('../src/index.js')
const requisitionPath = './requisitions/gynCytologyReq.html'

console.log(requisitionPath)

var data = {
  title: 'This is a test of the emergency broadcast system.'
}

describe('gynCytologyReq', function() {
  it('testing gynCytologyReq', function(done) {
    requisitions.gynCytologyReq.build(data, function (err, result) {
      assert.notEqual(result, null)
      fs.writeFile(requisitionPath, result, function (err) {
        if(err) console.log(err)
      })
    })
    done()
  })
})
