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
        "Michael S. Brown, MD, FCAP",
        "Pamela P. Clegg, MD, FCAP",
        "Angela F. Durden, MD, FCAP",
        "Kerrie R. Emerick, MD, FCAP",
        "Christopher J. Nero, MD, FCAP",
        "Duane A. Schultz, MD, FCAP"
      ]
    }

    var images = []

    async.waterfall([

      function (callback) {
        async.eachSeries(
          ['./images/ypii-logo.jpg', './images/neo-small.jpg'],

          function (fileName, cb) {
            fs.readFile(fileName, function (err, content) {
              if(err) return console.log(err)
              images.push(content.toString('base64'))
              cb(null)
            })
          }

        ), function (err) {
          callback(null, 'all done.')
        }
      },

      function (err) {
        console.log('asdf')
        inputData.logoImage = images[0]
        inputData.neoImage = images[1]
        done()
      }

    ]), function (err) {
      console.log('waterfall is done.')
    }
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

})
