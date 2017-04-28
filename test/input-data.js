'use strict'

const async = require('async')
const fs = require('fs')

module.exports.build = function (callback) {
  var images64 = []

  var data = {
    logoImage: null,
    neoImage: null,
    addresses: [
      {
        addressline1: 'asdfasdf',
        addressline2: 'asdfasdf',
        city: 'asdf',
        state: 'asdf',
        zip: 'asdf',
        phone: ''
      },
      {

      }
    ]
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
      if(err) return callback(err)
      data.logoImage = images64[0]
      data.neoImage = images64[1]
      callback(null, data)
    }
  )

}
