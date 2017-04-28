const assert = require('chai').assert
const path = require('path')
const fs = require('fs')
const async = require('async')

const requisitions  = require('../src/index.js')

var inputData = require(path.join(__dirname, 'input-data'))

describe('gynCytologyReq', function() {  

  describe('gynCytologyReq', function() {
    it('testing gynCytologyReq', function(done) {
      requisitions.gynCytologyReq.build(inputData, function (err, result) {
        if(err) consoel.log(err)
        assert.notEqual(result, null)
        var requisitionPath = './requisitions/gyn-cytology-req.html'
        fs.writeFile(requisitionPath, result, function (err) {
          if(err) console.log(err)
          done()
        })
      })
    })
  })

  describe('surgicalReq', function() {
    it('testing surgicalReq', function(done) {
      requisitions.surgicalReq.build(inputData, function (err, result) {
        assert.notEqual(result, null)
        var requisitionPath = './requisitions/surgical-req.html'
        fs.writeFile(requisitionPath, result, function (err) {
          if(err) console.log(err)
          done()
        })
      })
    })
  })

  describe('oncologyReq', function() {
    it('testing oncologyReq', function(done) {
      requisitions.oncologyReq.build(inputData, function (err, result) {
        assert.notEqual(result, null)
        var requisitionPath = './requisitions/oncology-req.html'
        fs.writeFile(requisitionPath, result, function (err) {
          if(err) console.log(err)
          done()
        })
      })
    })
  })

  describe('ihcReq', function() {
    it('testing ihcReq', function(done) {
      requisitions.ihcReq.build(inputData, function (err, result) {
        assert.notEqual(result, null)
        var requisitionPath = './requisitions/ihc-req.html'
        fs.writeFile(requisitionPath, result, function (err) {
          if(err) console.log(err)
          done()
        })
      })
    })
  })

})
