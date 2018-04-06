'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPageTitle;

var _consts = require('../consts');

/**
 * Return page title:
 * “Style Guide Title” for all components view;
 * “Component Name — Style Guide Title” for isolated component or example view.
 * “Section Name — Style Guide Title” for isolated section view.
 *
 * @param {object} sections
 * @param {string} baseTitle
 * @param {string} displayMode
 * @return {string}
 */
function getPageTitle(sections, baseTitle, displayMode) {
  if (displayMode === _consts.DisplayModes.component || displayMode === _consts.DisplayModes.example) {
    return sections[0].components[0].name + ' \u2014 ' + baseTitle;
  } else if (displayMode === _consts.DisplayModes.section) {
    return sections[0].name + ' \u2014 ' + baseTitle;
  }
  return baseTitle;
}