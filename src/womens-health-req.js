var Handlebars = require('handlebars/runtime');
var templates = require('./precompile-hbs.js');

Handlebars.registerPartial('patientInfo', Handlebars.templates['patientInfo'])
var template = Handlebars.templates['patientInfo']

console.log(template)

//var result = template(d)
//console.log(result)
