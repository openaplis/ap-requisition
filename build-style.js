const fs = require('fs')
const stylus = require('stylus')

fs.readFile('./src/style.styl', 'utf8', function(err, str) {
    if (err) throw err
    stylus.render(str, function(err, css){
      if (err) throw err
      fs.writeFile('./src/style.handlebars', css, function (err) {
        console.log('all done')
      })
    })
})
