var fs = require("fs");
var Handlebars = require('Handlebars')

var source = fs.readFileSync('data.handlebars').toString()
var data = JSON.parse(fs.readFileSync('data.json'))

var template = Handlebars.compile(source);
var result = template(data)

fs.writeFileSync("result.html", result)
//console.log(result)
