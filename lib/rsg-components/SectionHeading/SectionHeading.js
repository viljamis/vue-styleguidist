'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SectionHeading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slot = require('rsg-components/Slot');

var _Slot2 = _interopRequireDefault(_Slot);

var _SectionHeadingRenderer = require('rsg-components/SectionHeading/SectionHeadingRenderer');

var _SectionHeadingRenderer2 = _interopRequireDefault(_SectionHeadingRenderer);

var _utils = require('../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function SectionHeading(_ref, _ref2) {
	var config = _ref2.config;

	var slotName = _ref.slotName,
	    slotProps = _ref.slotProps,
	    children = _ref.children,
	    id = _ref.id,
	    level = _ref.level,
	    name = _ref.name,
	    nameParent = _ref.nameParent,
	    _ref$collection = _ref.collection,
	    collection = _ref$collection === undefined ? {} : _ref$collection,
	    rest = _objectWithoutProperties(_ref, ['slotName', 'slotProps', 'children', 'id', 'level', 'name', 'nameParent', 'collection']);

	var navigation = config.navigation;
	var href = (0, _utils.getUrlNavigation)(navigation, {
		level: level,
		sections: collection.sections,
		components: collection.components,
		nameParent: nameParent,
		name: name,
		slug: id
	});
	return _react2.default.createElement(
		_SectionHeadingRenderer2.default,
		_extends({
			toolbar: _react2.default.createElement(_Slot2.default, { name: slotName, props: slotProps }),
			id: id,
			navigation: navigation,
			href: href
		}, rest),
		children
	);
}

SectionHeading.propTypes = {
	children: _propTypes2.default.node,
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired,
	nameParent: _propTypes2.default.string.isRequired,
	level: _propTypes2.default.number.isRequired,
	slotName: _propTypes2.default.string.isRequired,
	slotProps: _propTypes2.default.object.isRequired,
	depth: _propTypes2.default.number.isRequired,
	deprecated: _propTypes2.default.bool,
	collection: _propTypes2.default.object
};

SectionHeading.contextTypes = {
	config: _propTypes2.default.object
};