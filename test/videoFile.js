var assert 	= require('assert');
var Joi 	= require('joi');

describe('video file extension', function() {

	Joi.contrib = require('../');
	var schema 	= { ext: Joi.contrib.videoFile() };

	describe('when validating a valid video file extension', function() {
		it('should validate', function(done) {

			var imgs = ['test.mpg'
				, 'test.mpeg'
				, 'test.mpv'
				, 'test.avi'
				, 'test.ogg'
				, 'test.webm'
				, 'test.flv'
				, 'test.ogv'
				, 'test.wmv'
				, 'test.3gp'
			];

			imgs.forEach(function (valid) {
				var input = { ext: valid };
				var res = Joi.validate(input, schema);
				assert(!res.error);
			});
			
			done();
		});
	});

	describe('when validating invalid video file extension', function() {
		it('should not validate', function(done) {

			var imgs = [
				'test.txt'
				, 'test.png'
				, 'test.doc'
				, 'test.log'
				, 'test.tmp'
				, 'test.ppt'
				, 'test.mp3'
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