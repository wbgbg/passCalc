#!/usr/bin/env node
"use strict";

var localpass = "xyugi123x";
var template="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

var pass = {
	calc : function(answer) {
		var finalpass = "";
		for (var i = 0; i < localpass.length; i++) {
			var s = localpass.charCodeAt(i);
			for (var j = 0; j < answer.length; j++) {
				s = (s ^ answer.charCodeAt(j) ^ Math.pow(2,j)) % template.length;
			}
			finalpass+=template[s % template.length];
		}
		finalpass+='0aA';
		return finalpass;
	}
}
module.exports = pass;


