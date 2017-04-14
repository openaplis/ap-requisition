const assert = require('chai').assert
const path = require('path')

const requisitions  = require('../src/index.js')

var data = {
  title: 'This is a test of the emergency broadcast system.'
}

describe('gynCytologyReq', function() {
  it('testing gynCytologyReq', function(done) {
    requisitions.gynCytologyReq.build(data, function (err, result) {
      assert.notEqual(result, null)
    })
    done()
  })
})
