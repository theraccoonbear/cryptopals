#!/usr/bin/env node

var helper = require('../../lib/helpers.js');

var aleph = '1c0111001f010100061a024b53535009181c';
var bet = '686974207468652062756c6c277320657965';

console.log(helper.xor(aleph, bet));