import React from 'react';
import PropTypes from 'prop-types';
import IconClose from '../../assets/icons/icon-close.svg';
import IconMenu from '../../assets/icons/icon-menu.svg';

import styles from './MenuToggle.module.css';

const MenuToggle = ({ toggleMenu, isMenuVisible }) => (
  <button type="button" onClick={toggleMenu} className={styles.toggle}>
    <IconMenu
      className={`${styles.icon} ${isMenuVisible ? styles.hideIcon : ''}`}
    />
    <IconClose
      className={`${styles.icon} ${isMenuVisible ? '' : styles.hideIcon}`}
    />
  </button>
);

MenuToggle.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired
};

export default MenuToggle;
