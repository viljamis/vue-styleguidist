'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableOfContents = require('rsg-components/TableOfContents');

var _TableOfContents2 = _interopRequireDefault(_TableOfContents);

var _StyleGuideRenderer = require('rsg-components/StyleGuide/StyleGuideRenderer');

var _StyleGuideRenderer2 = _interopRequireDefault(_StyleGuideRenderer);

var _Sections = require('rsg-components/Sections');

var _Sections2 = _interopRequireDefault(_Sections);

var _Welcome = require('rsg-components/Welcome');

var _Welcome2 = _interopRequireDefault(_Welcome);

var _Error = require('rsg-components/Error');

var _Error2 = _interopRequireDefault(_Error);

var _consts = require('../../../scripts/consts');

var _consts2 = require('../../consts');

var _getIdParam = require('../../utils/getIdParam');

var _getIdParam2 = _interopRequireDefault(_getIdParam);

var _scrollTo = require('../../utils/scrollTo');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleGuide = function (_Component) {
	_inherits(StyleGuide, _Component);

	function StyleGuide() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, StyleGuide);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StyleGuide.__proto__ || Object.getPrototypeOf(StyleGuide)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			error: false,
			info: null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(StyleGuide, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				codeRevision: this.props.codeRevision,
				config: this.props.config,
				slots: this.props.slots,
				displayMode: this.props.displayMode
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.scrollToId();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.scrollToId();
		}
	}, {
		key: 'componentDidCatch',
		value: function componentDidCatch(error, info) {
			this.setState({
				error: error,
				info: info
			});
		}
	}, {
		key: 'scrollToId',
		value: function scrollToId() {
			if (this.props.config.navigation) {
				var id = (0, _getIdParam2.default)();
				if (id) {
					(0, _scrollTo2.default)(id);
				} else {
					(0, _scrollTo2.default)();
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    config = _props.config,
			    sections = _props.sections,
			    welcomeScreen = _props.welcomeScreen,
			    patterns = _props.patterns,
			    allSections = _props.allSections,
			    displayMode = _props.displayMode;


			if (this.state.error) {
				return _react2.default.createElement(_Error2.default, { error: this.state.error, info: this.state.info });
			}

			if (welcomeScreen) {
				return _react2.default.createElement(_Welcome2.default, { patterns: patterns });
			}

			return _react2.default.createElement(
				_StyleGuideRenderer2.default,
				{
					title: config.title,
					homepageUrl: _consts.HOMEPAGE,
					toc: _react2.default.createElement(_TableOfContents2.default, { sections: config.navigation ? allSections : sections }),
					hasSidebar: config.navigation || config.showSidebar && displayMode === _consts2.DisplayModes.all
				},
				_react2.default.createElement(_Sections2.default, { sections: sections, depth: 1 })
			);
		}
	}]);

	return StyleGuide;
}(_react.Component);

StyleGuide.propTypes = {
	codeRevision: _propTypes2.default.number.isRequired,
	config: _propTypes2.default.object.isRequired,
	slots: _propTypes2.default.object.isRequired,
	sections: _propTypes2.default.array.isRequired,
	allSections: _propTypes2.default.array.isRequired,
	welcomeScreen: _propTypes2.default.bool,
	patterns: _propTypes2.default.array,
	displayMode: _propTypes2.default.string
};
StyleGuide.childContextTypes = {
	codeRevision: _propTypes2.default.number.isRequired,
	config: _propTypes2.default.object.isRequired,
	slots: _propTypes2.default.object.isRequired,
	displayMode: _propTypes2.default.string
};
StyleGuide.defaultProps = {
	displayMode: _consts2.DisplayModes.all
};
exports.default = StyleGuide;