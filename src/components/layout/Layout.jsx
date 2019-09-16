import React from 'react';
import PropTypes from 'prop-types';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;