'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require(__dirname + '/views.js');

module.exports = class GynCytologyReq {

  constructor () {

    Handlebars.registerPartial('style', Handlebars.templates['style'])
    Handlebars.registerPartial('gyn-cytology-req/page', Handlebars.templates['gyn-cytology-req/page'])

    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('new-gyn-req/gyn-patient-info', Handlebars.templates['partials/patient-info'])
    Handlebars.registerPartial('new-gyn-req/gyn-billing-info', Handlebars.templates['partials/billing-info'])
    Handlebars.registerPartial('new-gyn-req/gyn-heading', Handlebars.templates['womens-health-req/requisition-header'])
    Handlebars.registerPartial('new-gyn-req/specimen-info', Handlebars.templates['womens-health-req/tissue-biopsy'])
  }

  build(cb) {
    var d = {
      title: 'hello world'
    }

    var template = Handlebars.templates['new-gyn-req/page']
    var result = template(d)
    cb(result)
  }
}
