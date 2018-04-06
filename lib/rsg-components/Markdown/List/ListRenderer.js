'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.ListRenderer = ListRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Styled = require('rsg-components/Styled');

var _Styled2 = _interopRequireDefault(_Styled);

var _Para = require('rsg-components/Para');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
	var space = _ref.space,
	    color = _ref.color,
	    fontFamily = _ref.fontFamily;
	return {
		list: _extends({}, (0, _Para.styles)({ space: space, color: color, fontFamily: fontFamily }).para, {
			paddingLeft: space[3]
		}),
		ordered: {
			listStyleType: 'decimal'
		},
		li: {
			color: color.base,
			fontFamily: fontFamily.base,
			fontSize: 'inherit',
			listStyleType: 'inherit'
		}
	};
};

function ListRenderer(_ref2) {
	var classes = _ref2.classes,
	    ordered = _ref2.ordered,
	    children = _ref2.children;

	var Tag = ordered ? 'ol' : 'ul';

	var classNames = (0, _classnames2.default)(classes.list, ordered && classes.ordered);

	return _react2.default.createElement(
		Tag,
		{ className: classNames },
		_react.Children.map(children, function (li) {
			return (0, _react.cloneElement)(li, { className: classes.li });
		})
	);
}
ListRenderer.propTypes = {
	classes: _propTypes2.default.object.isRequired,
	ordered: _propTypes2.default.bool,
	children: _propTypes2.default.node.isRequired
};
ListRenderer.defaultProps = {
	ordered: false
};

exports.default = (0, _Styled2.default)(styles)(ListRenderer);