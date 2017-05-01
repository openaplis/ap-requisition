const fs = require('fs')
const stylus = require('stylus')

fs.readFile('./src/core/style.styl', 'utf8', function (err, str) {
  if (err) throw err
  stylus.render(str, function (err, css) {
    if (err) throw err
    fs.writeFile('./src/core/style.handlebars', css, function (err) {
      if (err) console.log(err)
      console.log('all done')
    })
  })
})
