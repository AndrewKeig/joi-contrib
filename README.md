
# joi-contrib

joi-contrib contains a series of joi validation functions not available in joi core

[![build status](https://travis-ci.org/AndrewKeig/joi-contrib.svg)](http://travis-ci.org/AndrewKeig/joi-contrib)

## Contains validation for:

- E.164 phone number
- ObjectId
- IP v4
- IP v6
- Image file extension
- Video file extension
- Audio file extension


## Installation

```
npm install joi
npm install joi-contrib --save
```

## Usage

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  something: Joi.contrib.*()
}

```

## Tests


```
npm test

```

## Api



### E.164 number

validates that the value is a valid international phone number complying to E.164 numbering format

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  phone: Joi.contrib.e164()
}

```

### ObjectId

validates that the value is an alphanumeric string of 24 characters in length, for example a mongo identifier.

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  id: Joi.contrib.objectId()
}

```

### IP v4

validates that the value is an ip address ipv4

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  ip: Joi.contrib.ipv4()
}

```

### IP v6

validates that the value is an ip address ipv6

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  ip: Joi.contrib.ipv6()
}

```

### Image file extension

validates that the value is an image file

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  ext: Joi.contrib.imageFile()
}

```

### Video file extension

validates that the value is an video file

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  ext: Joi.contrib.videoFile()
}

```

### Audio file extension

validates that the value is an audio file

```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  ext: Joi.contrib.audioFile()
}

```



## Coming soon

- validate url
- validate string is html
- validate hex color
- validate domain name
- validate mac address
- validate credit card types, visa, mastercard, amex, diners, discover, jcb
- validate isbn
- validate uuid
- validate gsmCharSet




## License

[MIT](https://github.com/andrewkeig/joi-contrib/blob/master/LICENSE)