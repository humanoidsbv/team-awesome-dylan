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
    <Link className={styles.item} activeClassName={styles.active} to="/">
      Time entries
    </Link>
    <Link
      className={styles.item}
      activeClassName={styles.active}
      to="/team-members"
    >
      Team members
    </Link>
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
  isMenuVisible: false
};

Navigation.propTypes = {
  isMenuVisible: PropTypes.bool
};

export default Navigation;
