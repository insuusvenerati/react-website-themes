'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bodytext = require('../styles/bodytext');

var _bodytext2 = _interopRequireDefault(_bodytext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bodytext = function Bodytext(props) {
  var html = props.html,
      children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _bodytext2.default : _props$themeStyle;


  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    html ? _react2.default.createElement('div', {
      className: '' + themeStyle,
      dangerouslySetInnerHTML: { __html: html }
    }) : _react2.default.createElement(
      'div',
      { className: '' + themeStyle },
      children
    )
  );
};

Bodytext.propTypes = {
  html: _propTypes2.default.string,
  themeStyle: _propTypes2.default.string
};

exports.default = Bodytext;