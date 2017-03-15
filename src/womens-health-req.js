'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require(__dirname + '/views.js');

module.exports = class WomensHealthReq {

  constructor () {
    Handlebars.registerPartial('womens-health-req/page', Handlebars.templates['womens-health-req/page'])
    Handlebars.registerPartial('womens-health-req/content', Handlebars.templates['womens-health-req/content'])

    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('partials/patient-info', Handlebars.templates['partials/patient-info'])
    Handlebars.registerPartial('partials/billing-info', Handlebars.templates['partials/billing-info'])
    Handlebars.registerPartial('womens-health-req/requisition-header', Handlebars.templates['womens-health-req/requisition-header'])
    Handlebars.registerPartial('womens-health-req/tissue-biopsy', Handlebars.templates['womens-health-req/tissue-biopsy'])
  }

  build(cb) {
    var d = {
      title: 'hello world'
    }

    var template = Handlebars.templates['womens-health-req/page']
    var result = template(d)
    cb(result)
  }
}
