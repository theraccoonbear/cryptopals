exports.parseHex = function(input) {
	return new Buffer(input, 'hex');
}
exports.hexToBase64 = function(input) {
	var buf = this.parseHex(input);
	return buf.toString('base64');
}

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
}

exports.hexToASCII = function(input) {
	var inp = this.parseHex(input);
	var ans = [];
	for (var i = 0, l = inp.length; i < l; i++) {
		ans.push(String.fromCharCode(inp[i]));
	}
	
	return ans.join('');
}