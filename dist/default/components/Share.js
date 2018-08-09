'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCustomShare = require('react-custom-share');

var _share = require('../styles/share');

var _share2 = _interopRequireDefault(_share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostShare = function PostShare(props) {
  var _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _share2.default : _props$themeStyle,
      shareBlockProps = props.shareBlockProps;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement(_reactCustomShare.ShareBlockStandard, shareBlockProps)
  );
};

PostShare.propTypes = {
  themeStyle: _propTypes2.default.string,
  shareBlockProps: _propTypes2.default.object
};

exports.default = PostShare;