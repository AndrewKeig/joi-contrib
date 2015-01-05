var assert 	= require('assert');
var Joi 	= require('joi');

describe('ip address', function() {

	Joi.contrib = require('../');
	
	describe('when validating a valid ipv4 address', function() {
		it('should validate', function(done) {
			var schema 	= { ip: Joi.contrib.ipv4() };
			
			var ips = ['127.0.0.1'
				, '0.0.0.0'
				, '255.255.255.255'
				, '1.2.3.4'
			];

			ips.forEach(function (valid) {
				var input = { ip: valid };
				var res = Joi.validate(input, schema);
				assert(!res.error);
			});
			
			done();
		});
	});

	describe('when validating a valid ipv6 address with ipv6', function() {
		it('should validate', function(done) {
			var schema 	= { ip: Joi.contrib.ipv4() };
			
			var ips = ['::2', '1001:db7:0000:0:0:0:0:1'];

			ips.forEach(function (valid) {
				var input = { ip: valid };
				var res = Joi.validate(input, schema);
				assert(res.error);
			});
			
			done();
		});
	});

	describe('when validating a valid ipv6 address', function() {
		it('should not validate', function(done) {
			var schema = { ip: Joi.contrib.ipv6() };
			
			var ips = ['::2', '1001:db7:0000:0:0:0:0:1'];

			ips.forEach(function (valid) {
				var input = { ip: valid };
				var res = Joi.validate(input, schema);
				assert(!res.error);
			});
			
			done();
		});
	});

	describe('when validating a valid ipv6 address with ipv4', function() {
		it('should not validate', function(done) {
			var schema 	= { ip: Joi.contrib.ipv6() };
			
			var ips = ['127.0.0.1'
				, '0.0.0.0'
				, '255.255.255.255'
				, '1.2.3.4'
			];

			ips.forEach(function (valid) {
				var input = { ip: valid };
				var res = Joi.validate(input, schema);
				assert(res.error);
			});
			
			done();
		});
	});


});