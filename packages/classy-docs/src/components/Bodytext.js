/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import PropTypes from 'prop-types';

import style from '../styles/bodytext';

const Bodytext = props => {
  const { html, children, themeStyle = style, customStyle = '' } = props;

  return (
    <React.Fragment>
      {html ? (
        <div
          css={[themeStyle, customStyle]}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <div className={`${themeStyle}`}>{children}</div>
      )}
    </React.Fragment>
  );
};

Bodytext.propTypes = {
  html: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Bodytext;
