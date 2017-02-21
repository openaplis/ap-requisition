var Handlebars = require('handlebars/runtime');
var templates = require('./templates.js');

Handlebars.registerPartial('partial', Handlebars.templates['patientInfo'])
var template = Handlebars.templates['patientInfo']

var d = {
  title: 'hello world'
}

var result = template(d)
console.log(result)
