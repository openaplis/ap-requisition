var Handlebars = require('handlebars/runtime');
var templates = require('./precompile-hbs.js');

Handlebars.registerPartial('patient-info', Handlebars.templates['partials/includes/patient-info'])
Handlebars.registerPartial('billing-info', Handlebars.templates['partials/includes/billing-info'])
Handlebars.registerPartial('requisition-header', Handlebars.templates['partials/includes/requisition-header'])
Handlebars.registerPartial('tissue-biopsy', Handlebars.templates['partials/includes/tissue-biopsy'])
var template = Handlebars.templates['pages/WomensHeatlhReq']

var d = {
  title: 'hello world'
}

var result = template(d)
console.log(result)
