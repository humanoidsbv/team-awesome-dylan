import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuToggle.module.css';

const MenuToggle = ({ toggleMenu, isMenuVisible }) => (
  <button onClick={toggleMenu} className={styles.toggle}>
    <span className={`${styles.icon} ${isMenuVisible ? styles.hideIcon : ''}`}>
      =
    </span>
    <span className={`${styles.icon} ${isMenuVisible ? '' : styles.hideIcon}`}>
      x
    </span>
  </button>
);

MenuToggle.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
};

export default MenuToggle;
