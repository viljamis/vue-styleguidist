'use strict';

require('./polyfills');

require('./styles');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _renderStyleguide = require('./utils/renderStyleguide');

var _renderStyleguide2 = _interopRequireDefault(_renderStyleguide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Examples code revision to rerender only code examples (not the whole page) when code changes
/* eslint-disable import/first */

var codeRevision = 0;

var render = function render() {
	// eslint-disable-next-line import/no-unresolved
	var styleguide = require('!!../loaders/styleguide-loader!./index.js');
	_reactDom2.default.render((0, _renderStyleguide2.default)(styleguide, codeRevision), document.getElementById('app'));
};

window.addEventListener('hashchange', render);

/* istanbul ignore if */
if (module.hot) {
	module.hot.accept('!!../loaders/styleguide-loader!./index.js', function () {
		codeRevision += 1;
		render();
	});
}

render();