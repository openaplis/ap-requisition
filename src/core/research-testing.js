'use strict'

var Handlebars = require('handlebars/runtime')
var path = require('path')
var views = require(path.join(__dirname, '/views.js'))

module.exports.build = (data, callback) => {
  Handlebars.registerPartial('researchTesting/page', Handlebars.templates['researchTesting/page'])
  Handlebars.registerPartial('style', Handlebars.templates['style'])

  Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
  Handlebars.registerPartial('researchTesting/header', Handlebars.templates['researchTesting/header'])
  Handlebars.registerPartial('oncology/clientandpatient-info', Handlebars.templates['oncology/clientandpatient-info'])
  Handlebars.registerPartial('oncology/consult', Handlebars.templates['oncology/consult'])
  Handlebars.registerPartial('oncology/hematology-menu', Handlebars.templates['oncology/hematology-menu'])
  Handlebars.registerPartial('oncology/solid-tumor-menu', Handlebars.templates['oncology/solid-tumor-menu'])

  var template = Handlebars.templates['researchTesting/page']
  var result = template(data)
  callback(null, result)
}
