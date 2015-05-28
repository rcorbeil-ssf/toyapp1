var loopback = require('loopback');
var boot = require('loopback-boot');

var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app37281512:bmgn3d4ovohl1trmj19ra7rn2i@ds037252.mongolab.com:37252/heroku_app37281512');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
