
# joi-contrib

joi-contrib contains a series of joi validation functions not available in joi core

[![build status](https://travis-ci.org/AndrewKeig/joi-contrib.svg)](http://travis-ci.org/AndrewKeig/joi-contrib)

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
runs tests

```

## Api



### E.164 number

An international E.164 number is designed to include all of the necessary information to 
successfully route a call to an individual subscriber on a nation's public telephone network. 
Here's how the E.164 numbering plan works:

- A telephone number can have a maximum of 15 digits
- The first part of the telephone number is the country code (one to three digits)
- The second part is the national destination code (NDC)
- The last part is the subscriber number (SN)
- The NDC and SN together are collectively called the national (significant) number

```
[+][country code][subscriber number including area code or national (significant) number]
```


```
var Joi = require('joi');
Joi.contrib = require('joi-contrib');

var schema = {
  phone: Joi.contrib.e164()
}

```


## License

[MIT](https://github.com/andrewkeig/joi-contrib/blob/master/LICENSE)