// var assert 	= require('assert');
// var Joi 	= require('joi');

// describe.only('url', function() {

// 	Joi.contrib = require('../');
// 	var schema 	= { id: Joi.contrib.url() };

// 	describe('when validating a valid url', function() {
// 		it('should validate', function(done) {
// 			var input = { url: 'http://www.github.com' };
// 			var res = Joi.validate(input, schema);
// 			assert(!res.error);
// 			done();
// 		});
// 	});

// 	describe('when validating an invalid url', function() {
// 		it('should not validate', function(done) {
// 			var input = { url: 'thiswillnotwork' };
// 			var res = Joi.validate(input, schema);
// 			assert(res.error);
// 			done();
// 		});
// 	});
// });