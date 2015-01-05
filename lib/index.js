
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
	}
}