const assert = require('chai').assert
const path = require('path')
const fs = require('fs')

const requisitions  = require('../src/index.js')

var data = {
  title: 'This is a test of the emergency broadcast system.',
  address1line1: '150 Walt Disney lane',
  address1line2: 'MiddleOfNowhere, MT 55555',
  phone1: 'Phone: (202) 505-5555',
  fax: 'Fax: (202) 505-5556',
  phone2: 'Phone: (303) 606-6665',
  address2line1: '42 MGM circle',
  address2line2: 'Fairytale, NY 52525',
  pathologistA: 'Donald Duck',
  pathologistB: 'Mickey Mouse',
  pathologistE: 'Goofey Gooferson',
  pathologistC: 'Bugs Bunny',
  pathologistD: 'Daffy Duck Sr',
  pathologistF: 'Porky Pig'
}

describe('gynCytologyReq', function() {
  it('testing gynCytologyReq', function(done) {
    requisitions.gynCytologyReq.build(data, function (err, result) {
      assert.notEqual(result, null)
      var requisitionPath = './requisitions/gynCytologyReq.html'
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
      var requisitionPath = './requisitions/surgicalReq.html'
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
      var requisitionPath = './requisitions/oncologyReq.html'
      fs.writeFile(requisitionPath, result, function (err) {
        if(err) console.log(err)
      })
    })
    done()
  })
})
