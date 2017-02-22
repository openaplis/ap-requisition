var fs = require('fs')
var Handlebars = require('handlebars/runtime');

var templates = require('./precompile-hbs.js');

Handlebars.registerPartial('patient-info', Handlebars.templates['partials/includes/patient-info'])
Handlebars.registerPartial('billing-info', Handlebars.templates['partials/includes/billing-info'])
Handlebars.registerPartial('requisition-header', Handlebars.templates['partials/includes/requisition-header'])
Handlebars.registerPartial('tissue-biopsy', Handlebars.templates['partials/includes/tissue-biopsy'])
var template = Handlebars.templates['pages/WomensHealthReq']

var fileName = 'src/requisition/womens-health-req.html'

var d = {
  title: 'hello world'
}

var html = template(d)
fs.writeFileSync(fileName, html)
