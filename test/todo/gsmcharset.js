// var assert 	= require('assert');
// var Joi 	= require('joi');

// describe.only('gsm charset 0338', function() {

// 	Joi.contrib = require('../');
// 	var schema 	= { message: Joi.contrib.gsmCharSet() };




// 	describe('when validating a valid gsm standard charset message', function() {
// 		it('should validate', function(done) {
// 			var input = { message: '@	£	$	¥	è	é	ù	ì	ò	Ç	\n	Ø	ø	\r	Å	å Δ	_	Φ	Γ	Λ	Ω	Π	Ψ	Σ	Θ	Ξ	ESC	Æ	æ	ß	É SP	!	“	#	¤	%	&	‘	(	)	*	+	,	-	.	/ 0	1	2	3	4	5	6	7	8	9	:	;	<	=	>	? ¡	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O P	Q	R	S	T	U	V	W	X	Y	Z	Ä	Ö	Ñ	Ü	§ ¿	a	b	c	d	e	f	g	h	i	j	k	l	m	n	o p	q	r	s	t	u	v	w	x	y	z	ä	ö	ñ	ü	à' };
// 			var res = Joi.validate(input, schema);
// 			assert(!res.error);
// 			done();
// 		});
// 	});

// 	describe('when validating a valid gsm extended charset message', function() {
// 		it('should validate', function(done) {
// 			var input = { message: '>' };
// 			var res = Joi.validate(input, schema);
// 			assert(!res.error);
// 			done();
// 		});
// 	});

// 	describe('when validating a invalid gsm charset message', function() {
// 		it('should validate', function(done) {
// 			var input = { message: '∞' };
// 			var res = Joi.validate(input, schema);
// 			assert(res.error);
// 			done();
// 		});
// 	});
// });

