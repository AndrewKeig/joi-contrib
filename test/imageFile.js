var assert 	= require('assert');
var Joi 	= require('joi');

describe('image file extension', function() {

	Joi.contrib = require('../');
	var schema 	= { ext: Joi.contrib.imageFile() };

	describe('when validating a valid image file extension', function() {
		it('should validate', function(done) {

			var imgs = ['test.bmp'
				, 'test.tif'
				, 'test.tiff'
				, 'test.gif'
				, 'test.jpeg'
				, 'test.jpg'
				, 'test.jif'
				, 'test.jfif'
				, 'test.jp2'
				, 'test.jpx'
				, 'test.j2k'
				, 'test.j2c'
				, 'test.fpx'
				, 'test.pcd'
				, 'test.png'
			];

			imgs.forEach(function (valid) {
				var input = { ext: valid };
				var res = Joi.validate(input, schema);
				assert(!res.error);
			});
			
			done();
		});
	});

	describe('when validating invalid image file extension', function() {
		it('should not validate', function(done) {

			var imgs = [
				'test.txt'
				, 'test.mpg'
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