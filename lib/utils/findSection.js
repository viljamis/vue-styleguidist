'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = findSection;
/**
 * Recursively finds a section with a given name (exact match)
 *
 * @param  {Array}  sections
 * @param  {string} name
 * @return {object}
 */
function findSection(sections, name) {
	var found = sections.find(
	// Need to replace whitespace in order to get a match in all browsers
	function (section) {
		return section.name.replace(/\s/g, '%20') === name.replace(/\s/g, '%20');
	});
	if (found) {
		return found;
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var section = _step.value;

			if (!section.sections || section.sections.length === 0) {
				continue;
			}
			var _found = findSection(section.sections, name);
			if (_found) {
				return _found;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return undefined;
}