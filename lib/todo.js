

	// url : function () {
	//   return Joi.string().regex(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);
	// }

// 	html : function () {
// 	  return Joi.string().regex(/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/);
// 	},

// 	hexColour : function () {
       // ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
// 		// hexcolor = /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
// 	  return Joi.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
// 	},

// 	imgFileExt : function () {
// ([^\s]+(\.(?i)(jpg|png|gif|bmp))$)
// 	  return Joi.string().regex(/^([^\s]+(\.(?i)(jpg|png|gif|bmp))$)/);
// 	},

// 	videoFileExt : function () {
// 	  return Joi.string().regex(/^([^\s]+(\.(?i)(mpg|mpeg|avi|ong))$)/);
// 	},


// 	domainName : function () {
// 	  return Joi.string().regex(/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/);
// 	},

// 	macAddress : function () {
// 	  return Joi.string().regex(/^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/);
// 	},

// //var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

// 	creditcard : function () {
// 	  return Joi.string().regex(/^(?:4[0-9]{12}(?:[0-9]{3})? |  5[1-5][0-9]{14} |  3[47][0-9]{13} |  3(?:0[0-5]|[68][0-9])[0-9]{11} |  6(?:011|5[0-9]{2})[0-9]{12} |  (?:2131|1800|35\d{3})\d{11})$/);
// 	},

// 	visa : function () {
// 	  return Joi.string().regex(/^4[0-9]{12}(?:[0-9]{3})?$/);
// 	},

// 	masterCard : function () {
// 	  return Joi.string().regex(/^5[1-5][0-9]{14}$/);
// 	},

// 	amex : function () {
// 	  return Joi.string().regex(/^3[47][0-9]{13}$/);
// 	},

// 	diners : function () {
// 	  return Joi.string().regex(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/);
// 	},

// 	discover : function () {
// 	  return Joi.string().regex(/^6(?:011|5[0-9]{2})[0-9]{12}$/);
// 	},

// 	jcb : function () {
// 	  return Joi.string().regex(/^(?:2131|1800|35\d{3})\d{11}$/);
// 	}

	//isbn
	 // var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/
  //     , isbn13Maybe = /^(?:[0-9]{13})$/;

// var uuid = {
//         '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i
//       , '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
//       , '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
//       , all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
//     };






//STANDARD CHARACTERS
// @	£	$	¥	è	é	ù	ì	ò	Ç	\n	Ø	ø	\r	Å	å
// Δ	_	Φ	Γ	Λ	Ω	Π	Ψ	Σ	Θ	Ξ	ESC	Æ	æ	ß	É
// SP	!	“	#	¤	%	&	‘	(	)	*	+	,	-	.	/
// 0	1	2	3	4	5	6	7	8	9	:	;	<	=	>	?
// ¡	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O
// P	Q	R	S	T	U	V	W	X	Y	Z	Ä	Ö	Ñ	Ü	§
// ¿	a	b	c	d	e	f	g	h	i	j	k	l	m	n	o
// p	q	r	s	t	u	v	w	x	y	z	ä	ö	ñ	ü	à

// EXTENDED CHARACTERS, will count as two characters within the text message.
// €	\f	[	\	]	^	{	|	}	~

// gsmCharSet : function () {
//   return Joi.string().regex(/^@£$¥èéùìòÇ\fØø\nÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\"#¤%&'()*+,-.\/[0-9]:;<=>\?¡[A-Z]ÄÖÑÜ§¿[a-z]äöñüà\^\{\}\[~\]\|€$/);
//    	return Joi.string().regex(/^[\x{20}-\x{7E}£¥èéùìòÇ\rØø\nÅåΔ_ΦΓΛΩΠΨΣΘΞ\x{1B}ÆæßÉ ¤¡ÄÖÑÜ§¿äöñüà\x{0C}€]*$/);
// },

// epp : function phoneEpp() {
//   return Joi.string().regex(/^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$/);
// }	

// Validate international phone numbers in EPP format

// This regular expression follows the international phone number notation 
// specified by the Extensible Provisioning Protocol (EPP). EPP is a relatively recent 
// protocol (finalized in 2004), designed for communication between domain name registries and registrars. 
// It is used by a growing number of domain name registries, including .com, .info, .net, .org, and .us. 
// The significance of this is that EPP-style international phone numbers are increasingly used and recognized, 
// and therefore provide a good alternative format for storing (and validating) international phone numbers.

// EPP-style phone numbers use the format +CCC.NNNNNNNNNNxEEEE, where C is the 1–3 digit country code, 
// N is up to 14 digits, and E is the (optional) extension. The leading plus sign and the dot following 
// the country code are required. The literal “x” character is required only if an extension is provided.

