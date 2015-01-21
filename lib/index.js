
var Joi = require('joi');

module.exports = {
	e164 : function () {
	  return Joi.string().regex(/^\+(?:[0-9] ?){6,14}[0-9]$/);
	},

	objectId : function () {
	  return Joi.string().regex(/^[0-9a-fA-F]{24}$/);
	},

	ipv4 : function () {
  	return Joi.string().regex(/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/);
	},

	ipv6 : function () {
  	return Joi.string().regex(/^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/);
	},

	imageFile : function () {
	  return Joi.string().regex(/^.*\.(bmp|tif|tiff|gif|jpeg|jpg|jif|jfif|jp2|jpx|j2k|j2c|fpx|pcd|png|)$/);
	},

	videoFile : function () {
	  return Joi.string().regex(/^.*\.(mpg|mpeg|mpv|avi|ogg|webm|flv|ogv|wmv|3gp|)$/);
	},

	audioFile : function () {
	  return Joi.string().regex(/^.*\.(aif|iff|m3u|m4a|mid|mp3|mpa|ra|wav|wma|)$/);
	}
}