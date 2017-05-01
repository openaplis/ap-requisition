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
        addressline1: '150 Walt Disney lane',
        addressline2: null,
        city: 'MiddleOfNowhere',
        state: 'MT',
        zip: '55555',
        phone: '(202) 505-5555',
        tollfree: '1(800) 123-4567',
        fax: '(202) 505-5556'
      },
      {
        addressline1: '42 MGM circle',
        addressline2: null,
        city: 'Fairytale',
        state: 'NY',
        zip: '52525',
        phone: '(303) 606-6665',
        tollfree: null,
        fax: null
      }
    ],
    pathologist: [
      'Mickey M. Mouse, MD, FCAP',
      'Donald A. Duck, MD, FCAP',
      'Minnie C. Mouse, MD, FCAP',
      'Goofy G. Goof, MD, FCAP',
      'Proky P. Pig, MD, FCAP',
      'Walt G. Disney, MD, FCAP'
    ]
  }

  async.eachSeries(
    ['./images/imagea.jpg', './images/imageb.jpg'],
    function (fileName, cb) {
      fs.readFile(fileName, function (err, content) {
        if (err) return console.log(err)
        images64.push(content.toString('base64'))
        cb(null)
      })
    },
    function (err) {
      if (err) return callback(err)
      data.logoImage = images64[0]
      data.neoImage = images64[1]
      callback(null, data)
    }
  )
}
