"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = scrollTo;
function scrollTo(id) {
	var element = document.scrollingElement || document.documentElement;
	var to = 0;
	if (id) {
		to = document.getElementById(id).offsetTop;
		element.scrollTop = to;
	} else {
		element.scrollTop = 0;
	}
}