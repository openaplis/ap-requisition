var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require('./hbs-precompile.js');

module.exports = class WomensHealthReq {
  constructor () {
    Handlebars.registerPartial('pages/womens-health-req', Handlebars.templates['pages/womens-health-req'])
    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('partials/patient-info', Handlebars.templates['partials/patient-info'])
    Handlebars.registerPartial('partials/billing-info', Handlebars.templates['partials/billing-info'])
    Handlebars.registerPartial('partials/requisition-header', Handlebars.templates['partials/requisition-header'])
    Handlebars.registerPartial('partials/tissue-biopsy', Handlebars.templates['partials/tissue-biopsy'])
    Handlebars.registerPartial('partials/womens-health', Handlebars.templates['partials/womens-health'])
  }

  build(cb) {
    var d = {
      title: 'hello world'
    }

    var template = Handlebars.templates['pages/womens-health-req']
    var result = template(d)
    cb(result)
  }
}
