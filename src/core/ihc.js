'use strict'

var fs = require('fs')
var Handlebars = require('handlebars/runtime')
var templates = require(__dirname + '/views.js')
var ihcTests = require('ihc-test')

module.exports.build = (data, callback) => {
    data.ihcTests = ihcTests
    Handlebars.registerPartial('ihc/page', Handlebars.templates['ihc/page'])
    Handlebars.registerPartial('style', Handlebars.templates['style'])
    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('oncology/header', Handlebars.templates['oncology/header'])
    Handlebars.registerPartial('oncology/clientandpatient-info', Handlebars.templates['oncology/clientandpatient-info'])
    Handlebars.registerPartial('ihc/ihc-menu', Handlebars.templates['ihc/ihc-menu'])
    Handlebars.registerPartial('oncology/solid-tumor-menu', Handlebars.templates['oncology/solid-tumor-menu'])

    var template = Handlebars.templates['ihc/page']
    var result = template(data)
    callback(null, result)
}
