var source = require("template/topArea.handlebars")

var template = Handlebars.compile(source)

var data = require("template/data.handlebars")

var result = template(data)
