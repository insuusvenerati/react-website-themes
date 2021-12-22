/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import style from '../styles/page';

const Page = props => {
  const { children, themeStyle = style, customStyle = '' } = props;

  return <div css={[themeStyle, customStyle]}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Page;
