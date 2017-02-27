var fs = require('fs')
var Handlebars = require('handlebars/runtime');
var templates = require('./womens-health-req/precompile.js');

module.exports = class WomensHealthReq {
  constructor () {
    Handlebars.registerPartial('womens-health-req/page', Handlebars.templates['womens-health-req/page'])
    Handlebars.registerPartial('womens-health-req/womens-health', Handlebars.templates['womens-health-req/womens-health'])

    Handlebars.registerPartial('layouts/base', Handlebars.templates['layouts/base'])
    Handlebars.registerPartial('partials/patient-info', Handlebars.templates['partials/patient-info'])
    Handlebars.registerPartial('partials/billing-info', Handlebars.templates['partials/billing-info'])
    Handlebars.registerPartial('partials/requisition-header', Handlebars.templates['partials/requisition-header'])
    Handlebars.registerPartial('partials/tissue-biopsy', Handlebars.templates['partials/tissue-biopsy'])
  }

  build() {
    //creates the style.css from style.style
    //creates the precompile.js from the appropriate partials
  }

  getHTML(cb) {
    //compiles the handlebars template and returns the html in the callback
    var d = {
      title: 'hello world'
    }

    var template = Handlebars.templates['pages/womens-health-req']
    var result = template(d)
    cb(result)
  }
}
