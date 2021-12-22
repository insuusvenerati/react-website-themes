import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';

const Heading = props => {
  const { title, children, themeStyle = '', customStyle = '' } = props;

  return (
    <header className={cx(themeStyle, customStyle)}>
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Heading;
