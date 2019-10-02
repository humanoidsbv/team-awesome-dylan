import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import styles from './Navigation.module.css';

const Navigation = ({ isMenuVisible }) => (
  <nav
    className={`${styles.navigation} ${
      isMenuVisible ? styles.navigationVisible : ''
    }`}
  >
    <Link className={styles.item} activeClassName={styles.itemActive} to="/">
      Time entries
    </Link>
    <Link
      className={styles.item}
      activeClassName={styles.itemActive}
      to="/team-members"
    >
      Team members
    </Link>
    <a className={styles.item} href="/">
      Projects
    </a>
    <Link
      className={styles.item}
      activeClassName={styles.itemActive}
      to="/clients"
    >
      Clients
    </Link>
    <a className={styles.item} href="/about.html">
      Documents
    </a>
  </nav>
);

Navigation.defaultProps = {
  isMenuVisible: false
};

Navigation.propTypes = {
  isMenuVisible: PropTypes.bool
};

export default Navigation;
