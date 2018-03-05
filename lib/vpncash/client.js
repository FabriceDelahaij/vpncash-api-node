'use strict';

var Client = function() {
	this['_requestify'] = require('requestify');
	this['config'] = {
		client: '1.0',
		endpoint: 'https://api.vpncash.com',
		version: 'v1',
		key: ''
	};
};

Client['prototype']['setApiEndpoint'] = function(endpoint) {
	return this['config']['endpoint'] = endpoint;
};

Client['prototype']['setApiKey'] = function(key) {
	return this['config']['key'] = key;
};

Client['prototype']['client'] = function(methode, resource, data, callback) {
	this['_requestify']['request'](this['config']['endpoint'] + '/' + resource + '', {
		method: methode,
		body: data,
		headers: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		dataType: 'form-url-encoded'
	}).then(response => {
		response = response['getBody']();
		console['log'](response['message']);
		if (!response['success']) return callback(response['message']);
		callback(null, response);
	}, result =>  callback(result));
};

module['exports'] = Client;
