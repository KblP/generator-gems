var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var restify = require('express-restify-mongoose');

var config = require('./config');
var app = express();

if (app.get('env') === 'development') {
  app.use(require('connect-livereload')());
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(require('express-mongoose-db')({ db: config.database.name }));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({ keys: config.server.sessionKeys }));

config.server.static.map(function(dir) {
  app.use(express.static(path.join(__dirname, dir)));
})

var restRouter = express.Router();
restify.serve(restRouter, require('./models/test.js'));
app.use(restRouter);

app.use('/', require('./routes/index'));
//app.use('/users', require('./routes/users'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Fouddnd');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var server = require('http').createServer(app)
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
  socket.emit('connected');
});

var listenPort = config.server.port || (process.env.PORT || 3000);

server.listen(listenPort, function() {
  console.log('Express server listening on port '+listenPort);
});
