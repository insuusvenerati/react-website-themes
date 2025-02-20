import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from '@emotion/css';

import Meta from './Meta';

const Blog = props => {
  const { items, themeStyle = '', customStyle = '', author, metaIcons } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title, categories },
            fields: { slug, prefix },
            excerpt,
          } = item;

          return (
            <li key={slug}>
              <Link to={slug}>
                <h3>{title}</h3>
                <Meta
                  categories={categories}
                  prefix={prefix}
                  author={author}
                  categoryLink={false}
                  icons={metaIcons}
                />
                <p>{excerpt}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Blog.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  metaIcons: PropTypes.object,
};

export default Blog;
