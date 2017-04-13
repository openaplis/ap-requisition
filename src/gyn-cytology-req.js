'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require(__dirname + '/views.js');

module.exports = class GynCytologyReq {

  constructor () {

    Handlebars.registerPartial('style', Handlebars.templates['style'])
    Handlebars.registerPartial('gyn-cytology-req/page', Handlebars.templates['gyn-cytology-req/page'])

    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('gyn-cytology-req/patient-info', Handlebars.templates['gyn-cytology-req/patient-info'])
    Handlebars.registerPartial('partials/billing-info', Handlebars.templates['partials/billing-info'])
    Handlebars.registerPartial('gyn-cytology-req/header', Handlebars.templates['gyn-cytology-req/header'])
    Handlebars.registerPartial('gyn-cytology-req/specimen-info', Handlebars.templates['gyn-cytology-req/specimen-info'])
  }

  build(cb) {
    var d = {
      title: 'hello world'
    }

    var template = Handlebars.templates['gyn-cytology-req/page']
    var result = template(d)
    cb(result)
  }
}
