import React from 'react';
import PropTypes from 'prop-types';
import { cx } from '@emotion/css';

const Hero = props => {
  const { html, children, themeStyle = '', customStyle = '' } = props;

  return (
    <React.Fragment>
      {html ? (
        <section
          className={cx(themeStyle, customStyle)}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <section className={`${themeStyle}`}>{children}</section>
      )}
    </React.Fragment>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  html: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Hero;
