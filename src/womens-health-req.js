var Handlebars = require('handlebars/runtime');
var templates = require('./precompile-hbs.js');

Handlebars.registerPartial('patientInfo', Handlebars.templates['partials/includes/patient-info'])

var template = Handlebars.templates['pages/WomensHeatlhReq']

var d = {
  title: 'hello world'
}

var result = template(d)
console.log(result)
