import PropTypes from 'prop-types';
import React from 'react';
import { cx } from '@emotion/css';

const Layout = props => {
  const { children, themeStyle = '', customStyle = '' } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Layout;
