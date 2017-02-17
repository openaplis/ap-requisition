var Handlebars = require('handlebars')
var templates = require('./template/template.js')

var compileTemplate = Handlebars.templates['topData']
var result = compileTemplate(topArea.data)
e.innerHTML = result
