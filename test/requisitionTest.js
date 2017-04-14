const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const requisitions  = require('../src/index.js')

var data = {
  title: 'This is a test of the emergency broadcast system.'
}

describe('gynCytologyReq', function() {
  it('testing gynCytologyReq', function(done) {
    requisitions.gynCytologyReq.build(data, function (err, result) {
      assert.notEqual(result, null)
      const requisitionPath = './requisitions/gynCytologyReq.html'
      fs.writeFile(requisitionPath, result, function (err) {
        if(err) console.log(err)
      })
    })
    done()
  })
})

describe('surgicalReq', function() {
  it('testing surgicalReq', function(done) {
    requisitions.surgicalReq.build(data, function (err, result) {
      assert.notEqual(result, null)
      const requisitionPath = './requisitions/surgicalReq.html'
      fs.writeFile(requisitionPath, result, function (err) {
        if(err) console.log(err)
      })
    })
    done()
  })
})

describe('oncologyReq', function() {
  it('testing oncologyReq', function(done) {
    requisitions.oncologyReq.build(data, function (err, result) {
      assert.notEqual(result, null)
      const requisitionPath = './requisitions/oncologyReq.html'
      fs.writeFile(requisitionPath, result, function (err) {
        if(err) console.log(err)
      })
    })
    done()
  })
})
