'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require(__dirname + '/views.js');

module.exports = class SurgicalReq {

  constructor () {
    Handlebars.registerPartial('oncology/page', Handlebars.templates['oncology/page'])
    Handlebars.registerPartial('style', Handlebars.templates['style'])

    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('oncology/header', Handlebars.templates['oncology/header'])
    Handlebars.registerPartial('oncology/clientandpatient-info', Handlebars.templates['oncology/clientandpatient-info'])
    Handlebars.registerPartial('oncology/consult', Handlebars.templates['oncology/consult'])
    Handlebars.registerPartial('oncology/hematology-menu', Handlebars.templates['oncology/hematology-menu'])
    Handlebars.registerPartial('oncology/solid-tumor-menu', Handlebars.templates['oncology/solid-tumor-menu'])
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
