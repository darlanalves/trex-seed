var rex = require('t-rex'),
	express = require('express'),

	environments = {
		development: 'mongodb://localhost/todo',
		production: 'mongodb://PRODUCTION-SERVER:cRaZyPassWoRD@mongo-server:1234/database'
	};

var app = rex(),
	ENV = process.env.NODE_ENV || process.argv[2] || 'production',
	DSN = environments[ENV];

if (!DSN) {
	console.error('\n> Environment name "%s" is invalid!\n', ENV);
	return;
}

app.use(express.logger('dev'))
	.use(express.static('public'))
	.resources(__dirname + '/resources/', ['User', 'Task'])
	.dsn(DSN)
	.listen(process.env.PORT || 8000);