var fs = require('fs')
var Handlebars = require('handlebars/runtime');

var templates = require('./precompile-hbs.js');

Handlebars.registerPartial('pages/WomensHealthReq', Handlebars.templates['pages/WomensHealthReq'])
Handlebars.registerPartial('partials/layouts/base', Handlebars.templates['partials/layouts/base'])

Handlebars.registerPartial('partials/includes/patient-info', Handlebars.templates['partials/includes/patient-info'])
Handlebars.registerPartial('partials/includes/billing-info', Handlebars.templates['partials/includes/billing-info'])
Handlebars.registerPartial('partials/includes/requisition-header', Handlebars.templates['partials/includes/requisition-header'])
Handlebars.registerPartial('partials/includes/tissue-biopsy', Handlebars.templates['partials/includes/tissue-biopsy'])

var template = Handlebars.templates['pages/WomensHealthReq']

var fileName = 'src/requisition/womens-health-req.html'

var d = {
  title: 'hello world'
}

var html = template(d)
fs.writeFileSync(fileName, html)
