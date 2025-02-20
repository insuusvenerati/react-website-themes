/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/header';

const Header = props => {
  const { children, themeStyle = style, customStyle = '' } = props;

  return <header css={[themeStyle, customStyle]}>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Header;
