var assert 	= require('assert');
var Joi 	= require('joi');

describe('object id', function() {

	Joi.contrib = require('../');
	var schema 	= { id: Joi.contrib.objectId() };

	describe('when validating a valid objectId', function() {
		it('should validate', function(done) {
			var input = { id: '542eda61d51db6ed71000018' };
			var res = Joi.validate(input, schema);
			assert(!res.error);
			done();
		});
	});

	describe('when validating an objectId with missing digit', function() {
		it('should not validate', function(done) {
			var input = { id: '542eda61d51db6ed7100001' };
			var res = Joi.validate(input, schema);
			assert(res.error);
			done();
		});
	});

	describe('when validating an invalid objectId', function() {
		it('should not validate', function(done) {
			var input = { id: 'thiswillnotwork' };
			var res = Joi.validate(input, schema);
			assert(res.error);
			done();
		});
	});
});