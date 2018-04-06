'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getUrl;
/**
 * Get component / section URL.
 *
 * @param {string} $.name Name
 * @param {string} $.slug Slug
 * @param {number} $.example Example index
 * @param {boolean} $.anchor Anchor?
 * @param {boolean} $.isolated Isolated mode?
 * @param {boolean} $.nochrome No chrome? (Can be combined with anchor or isolated)
 * @param {boolean} $.absolute Absolute URL? (Can be combined with other flags)
 * @param {object} [location] Location object (will use current page location by default)
 * @return {string}
 */
function getUrl() {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    name = _ref.name,
	    slug = _ref.slug,
	    example = _ref.example,
	    anchor = _ref.anchor,
	    isolated = _ref.isolated,
	    nochrome = _ref.nochrome,
	    absolute = _ref.absolute,
	    id = _ref.id;

	var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location,
	    origin = _ref2.origin,
	    pathname = _ref2.pathname;

	var url = pathname;

	if (nochrome) {
		url += '?nochrome';
	}

	if (anchor) {
		url += '#' + slug;
	} else if (isolated || nochrome) {
		url += '#!/' + name;
	}

	if (id) {
		url += '?id=' + id;
	}

	if (example !== undefined) {
		url += '/' + example;
	}

	if (absolute) {
		return origin + url;
	}

	return url;
}