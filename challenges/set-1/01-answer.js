#!/usr/bin/env node

var helper = require('../../lib/helpers.js');

var raw_hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';

var b64 = helper.hexToBase64(raw_hex);

console.log('Hex:', raw_hex);
console.log('Base64 Encoded:', b64)