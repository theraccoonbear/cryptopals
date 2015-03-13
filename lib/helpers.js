exports.parseHex = function(input) {
	return new Buffer(input, 'hex');
};

exports.hexToBase64 = function(input) {
	var buf = this.parseHex(input);
	return buf.toString('base64');
};

exports.xor = function(a, b) {
	var aleph = this.parseHex(a);
	var bet = this.parseHex(b);
	var answer = new Buffer(aleph.length);
	var i, l;
	var bi;
	for (var i = 0, bi = 0, l = a.length; i < l; i++) {
		answer[i] = aleph[i] ^ bet[bi];
		bi++;
		if (bi >= bet.length) {
			bi = 0;
		}
	}
	
	return answer.toString('hex');
};

exports.hexToASCII = function(input) {
	var inp = this.parseHex(input);
	var ans = [];
	for (var i = 0, l = inp.length; i < l; i++) {
		ans.push(String.fromCharCode(inp[i]));
	}
	
	return ans.join('');
};

exports.percentPrintable = function(str) {
	return str.split('').reduce(function(total, c) { if (isNaN(total)) { total = 0; } return total + (/[\x20-\x7F]/.test(c) ? 1 : 0); }) / str.length;
};

exports.countOf = function(str, seek) {
	var rgx = new RegExp(seek, 'g');
	var mc = str.match(rgx);
	//console.log(mc);
	return mc != null && typeof mc.length !== 'undefined' ? mc.length : 0;
};