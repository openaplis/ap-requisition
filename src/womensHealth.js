var Handlebars = require('handlebars')
var templates = require('./template/template.js')

var compileTemplate = Handlebars.templates['topData']
var compileTemplate = Handlebars.templates['patientInfo']
var compileTemplate = Handlebars.templates['billingInfo']
var compileTemplate = Handlebars.templates['womensHealth']
var compileTemplate = Handlebars.templates['tissueBiopsy']

var result = compileTemplate(topArea.data, patientInfo.data, billingInfo.data, womensHealth.data, tissueBiopsy.data)
e.innerHTML = result
