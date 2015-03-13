#!/usr/bin/env node

var helper = require('../../lib/helpers.js');

var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, '../../data/04-data.txt');

var data = fs.readFileSync(filePath, {encoding: 'utf-8'});
var lines = data.split(/\n/);


for (var i = 0, l = lines.length; i < l; i++) {
	var line = lines[i];
	for (var ci = 32; ci < 128; ci++) {
		var c = ci;
		var c_hex = c.toString(16);
	
		var str = helper.hexToASCII(helper.xor(line, c_hex));
		var pp = helper.percentPrintable(str);
		var sp_cnt = helper.countOf(str, ' ');
		if (sp_cnt > 0) {
			console.log((i + 1) + '/' + l, c, sp_cnt, str);
		}
	}
}