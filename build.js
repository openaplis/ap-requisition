const fs = require('fs')
const stylus = require('stylus')
const handlebars = require('handlebars')
const readDir = require('fs-readdir-recursive')
const path = require('path')
const os = require('os')

var files = readDir(__dirname + '/src', function (file) {
  var ext = path.extname(file)
  if(ext == '') return true
  if(ext == '.handlebars') return true
  return false
})

files.forEach(function (file) {
  var filePath =  path.join('src', file)
  var data = fs.readFileSync(filePath, 'utf8')
  var template = handlebars.precompile(data)
  console.log(template)
  handlebars.registerPartial(file, template)
})

//console.log(handlebars.partials)

//var data = fs.readFileSync('src/style.handlebars', 'utf8');

//var template = handlebars.precompile(data)
//handlebars.partials['styles'] = template
//console.log(handlebars.partials)

//handlebars.templates['style'] = template

/*
fs.readFile('./src/style.styl', 'utf8', function(err, str) {
    if (err) throw err
    stylus.render(str, function(err, css){
      if (err) throw err
      handlebars.partials['style'] = css
      console.log(handlebars.partials['style'])
      //fs.writeFile('./src/style.handlebars', css, function (err) {
      //  console.log('all done')
      //})
    })
})
*/
