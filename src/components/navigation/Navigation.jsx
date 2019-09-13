import React from 'react';
import PropTypes from 'prop-types';

import styles from './Navigation.module.css';

const Navigation = ({ visibilityMenu }) => (
  <nav
    className={`${styles.navigation} ${
      visibilityMenu ? styles.navigationVisible : ''
    }`}
  >
    <a className={`${styles.item} ${styles.itemActive}`} href="/">
      Timesheets
    </a>
    <a className={styles.item} href="/">
      Team members
    </a>
    <a className={styles.item} href="/">
      Projects
    </a>
    <a className={styles.item} href="/">
      Clients
    </a>
    <a className={styles.item} href="/about.html">
      Documents
    </a>
  </nav>
);

Navigation.defaultProps = {
  visibilityMenu: false
};

Navigation.propTypes = {
  visibilityMenu: PropTypes.bool
};

export default Navigation;
