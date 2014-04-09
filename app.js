/**
 * Module dependencies.
 */
// author:thangskyline
// author:thangma
var iTemp = 0;
var express = require('express'), routes = require('./routes'), user = require('./routes/user'), http = require('http'), path = require('path');

var app = express();

// all environments
app.set('port', 81);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'admin1')));
app.use(express.static(path.join(__dirname, 'admin2')));
var tempVar = path.join(__dirname, 'admin');
// development only
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

// app.get('/', routes.index);
app.get('/', function(req, res) {

	var filePath = __dirname + '/admin/index.html';

	if (path.existsSync(filePath)) {
		res.sendfile(filePath);
	} else {
		res.statusCode = 404;
		res.write('404 sorry not found');
		res.end();
	}
});
app.get('/admin1', function(req, res) {

	var filePath = __dirname + '/admin1/index.html';

	if (path.existsSync(filePath)) {
		res.sendfile(filePath);
	} else {
		res.statusCode = 404;
		res.write('404 sorry not found');
		res.end();
	}
});
app.get('/admin2', function(req, res) {

	var filePath = __dirname + '/admin2/index.html';

	if (path.existsSync(filePath)) {
		res.sendfile(filePath);
	} else {
		res.statusCode = 404;
		res.write('404 sorry not found');
		res.end();
	}
});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});