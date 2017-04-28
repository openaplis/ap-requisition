const assert = require('chai').assert
const path = require('path')
const fs = require('fs')
const async = require('async')

const requisitions  = require('../src/index.js')

var inputData = {}

describe('gynCytologyReq', function() {

  before(function(done) {

    inputData = {
      logoImage: null,
      neoImage: null,
      title: 'This is a test of the emergency broadcast system.',
      address1line1: '150 Walt Disney lane',
      address1line2: 'MiddleOfNowhere, MT 55555',
      phone1: 'Phone: (202) 505-5555',
      fax: 'Fax: (202) 505-5556',
      phone2: 'Phone: (303) 606-6665',
      address2line1: '42 MGM circle',
      address2line2: 'Fairytale, NY 52525',
      pathologist: [
        "Mickey M. Mouse, MD, FCAP",
        "Donald A. Duck, MD, FCAP",
        "Minnie C. Mouse, MD, FCAP",
        "Goofy G. Goof, MD, FCAP",
        "Proky P. Pig, MD, FCAP",
        "Walt G. Disney, MD, FCAP"
      ]
    }

    var images64 = []

    async.eachSeries(
      ['./images/imagea.jpg', './images/imageb.jpg'],
      function (fileName, cb) {
        fs.readFile(fileName, function (err, content) {
          if(err) return console.log(err)
          images64.push(content.toString('base64'))
          cb(null)
        })
      },
      function (err) {
        inputData.logoImage = images64[0]
        inputData.neoImage = images64[1]
        done()
      }
    )
  })

  describe('gynCytologyReq', function() {
    it('testing gynCytologyReq', function(done) {
      requisitions.gynCytologyReq.build(inputData, function (err, result) {
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
