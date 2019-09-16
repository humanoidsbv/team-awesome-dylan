import React, { useState } from 'react';

import Logo from '../logo/Logo';
import MenuToggle from '../menu-toggle/MenuToggle';
import Navigation from '../navigation/Navigation';
import ProfileButton from '../profile-button/ProfileButton';
import styles from './Header.module.css';

function Header() {
  const [isMenuVisible, makeMenuVisible] = useState(false);

  const toggleMenu = () => {
    makeMenuVisible(!isMenuVisible);
  };

  return (
    <header
      className={`${styles.header} ${
        isMenuVisible ? styles.headerMenuVisible : ''
      }`}
    >
      <Logo />
      <Navigation isMenuVisible={isMenuVisible} />
      <MenuToggle isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
      <ProfileButton />
    </header>
  );
}

export default Header;
