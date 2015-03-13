#!/usr/bin/env node

var helper = require('../../lib/helpers.js');

var xored = '1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736';

for (var i = 32; i < 128; i++) {
	var c = i;
	var c_hex = c.toString(16);	
	console.log(c, helper.hexToASCII(helper.xor(xored, c_hex)));
}

// answer = 'X' or 88