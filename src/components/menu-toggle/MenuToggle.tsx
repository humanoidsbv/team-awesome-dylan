import React from 'react';

import IconClose from '../../assets/icons/icon-close.svg';
import IconMenu from '../../assets/icons/icon-menu.svg';

import styles from './MenuToggle.module.css';

interface MenuToggleInterface {
  toggleMenu: () => void;
  isMenuVisible: boolean;
}

const MenuToggle = ({ toggleMenu, isMenuVisible }: MenuToggleInterface): React.ReactElement => (
  <button type="button" onClick={toggleMenu} className={styles.toggle}>
    <IconMenu
      className={`${styles.icon} ${isMenuVisible ? styles.hideIcon : ''}`}
    />
    <IconClose
      className={`${styles.icon} ${isMenuVisible ? '' : styles.hideIcon}`}
    />
  </button>
);

export default MenuToggle;
