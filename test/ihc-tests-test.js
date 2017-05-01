const assert = require('chai').assert
const ihcTests = require('../src/core/ihc/ihc-tests.js')

describe('IHC Tests', function () {
  describe('Test', function () {
    it('Does it work', function (done) {
      assert.notEqual(ihcTests, null)
      assert.isAtLeast(ihcTests.groups.length, 1)
      assert.isAtLeast(ihcTests.groups[0].tests.length, 1)
      console.log(ihcTests)
      done()
    })
  })
})
