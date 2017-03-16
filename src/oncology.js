'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require(__dirname + '/views.js');

module.exports = class SurgicalReq {

  constructor () {
    Handlebars.registerPartial('oncology/page', Handlebars.templates['oncology/page'])
    Handlebars.registerPartial('style', Handlebars.templates['style'])

    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('oncology/onco-header', Handlebars.templates['oncology/onco-header'])
    Handlebars.registerPartial('oncology/onco-clientandpatient-info', Handlebars.templates['oncology/onco-clientandpatient-info'])
    Handlebars.registerPartial('oncology/consult', Handlebars.templates['oncology/consult'])
    Handlebars.registerPartial('oncology/hematology-test-menu', Handlebars.templates['oncology/hematology-test-menu'])
    Handlebars.registerPartial('oncology/solid-tumor-test-menu', Handlebars.templates['oncology/solid-tumor-test-menu'])
  }

  build(cb) {
    var d = {
      title: 'hello world'
    }

    var template = Handlebars.templates['oncology/page']
    var result = template(d)
    cb(result)
  }
}
