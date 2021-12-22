/** @jsx jsx */
import { jsx } from '@emotion/react';
import PropTypes from 'prop-types';

import style from '../styles/layout';

export default function Layout({
  children,
  themeStyle = style,
  customStyle = '',
}) {
  return (
    <div css={[themeStyle, customStyle]}>
      <main>{children}</main>
    </div>
  );
}

// class Layout extends React.Component {
//   state = {
//     modifier: '',
//   };
//
//   componentDidMount() {
//     this.setState({
//       modifier: 'entry',
//     });
//   }
//
//   render() {
//     const { children, themeStyle = style, customStyle = '' } = this.props;
//     const { modifier } = this.state;
//
//     return (
//       <div css={[themeStyle, customStyle, modifier]}>
//         <main>{children}</main>
//       </div>
//     );
//   }
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};
