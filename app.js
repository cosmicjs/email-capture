var http_module = require('http')
var express = require('express')
var app = express()
var hogan = require('hogan-express')
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(__dirname + '/public/'))
var Cosmic = require('cosmicjs')
var bucket_slug = process.env.COSMIC_BUCKET || 'email-capture'
var config = {
  bucket: {
    slug: bucket_slug,
    read_key: process.env.COSMIC_READ_KEY,
    write_key: process.env.COSMIC_WRITE_KEY
  }
}
app.get('/', function(req, res) {
  Cosmic.getObjects(config, function(err, response) {
    res.locals.cosmic = response;
    if (!response.object.home)
      return res.send('Object not found.  Make sure you have a page titled Home in your Cosmic JS Bucket.')
    var bg_images = response.object.home.metadata.background_gallery.map(function(item) {
      return { 
       url: item.image.imgix_url + '?w=1200',
       alignment: 'center'
      }
    })
    res.locals.bg_images = JSON.stringify(bg_images);
    res.locals.year = new Date().getFullYear();
    res.render('index.html')
  })
});
const http = http_module.Server(app)
http.listen(app.get('port'), () => {
  console.info('==> 🌎  Go to http://localhost:%s', app.get('port'));
})