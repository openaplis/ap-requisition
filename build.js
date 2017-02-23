var fs = require('fs')
var stylus = require('stylus')
var  handlebars = require('handlebars')

var data = fs.readFileSync('src/style.handlebars', 'utf8');

var template = handlebars.precompile(data)
handlebars.partials['styles'] = template
console.log(handlebars.partials)

//handlebars.templates['style'] = template

/*
fs.readFile('./src/style.styl', 'utf8', function(err, str) {
    if (err) throw err
    stylus.render(str, function(err, css){
      if (err) throw err
      fs.writeFile('./src/style.handlebars', css, function (err) {
        console.log('all done')
      })
    })
})
*/
