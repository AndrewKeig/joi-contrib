var assert 	= require('assert');
var Joi 	= require('joi');

describe('audio file extension', function() {

	Joi.contrib = require('../');
	var schema 	= { ext: Joi.contrib.audioFile() };

	describe('when validating a valid audio file extension', function() {
		it('should validate', function(done) {

			var imgs = ['test.aif'
				, 'test.iff'
				, 'test.m3u'
				, 'test.m4a'
				, 'test.mid'
				, 'test.mp3'
				, 'test.mpa'
				, 'test.ra'
				, 'test.wav'
				, 'test.wma'
			];

			imgs.forEach(function (valid) {
				var input = { ext: valid };
				var res = Joi.validate(input, schema);
				assert(!res.error);
			});
			
			done();
		});
	});

	describe('when validating invalid audio file extension', function() {
		it('should not validate', function(done) {

			var imgs = [
				'test.txt'
				, 'test.png'
				, 'test.doc'
				, 'test.log'
				, 'test.tmp'
				, 'test.ppt'
				, 'test.avi'
				, 'test.sql'
			];

			imgs.forEach(function (valid) {
				var input = { ext: valid };
				var res = Joi.validate(input, schema);
				assert(res.error);
			});
			
			done();
		});
	});
});