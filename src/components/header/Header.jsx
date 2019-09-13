import React, { useState } from 'react';

import styles from './Header.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import MenuToggle from '../menu-toggle/MenuToggle';
import ProfileButton from '../profile-button/ProfileButton';

function Header() {
  const [visibilityMenu, makeMenuVisible] = useState(false);

  const toggleMenu = () => {
    makeMenuVisible(!visibilityMenu);
  };

  return (
    <header
      className={`${styles.header} ${
        visibilityMenu ? styles.headerMenuVisible : ''
      }`}
    >
      <Logo />
      <Navigation visibilityMenu={visibilityMenu} />
      <MenuToggle visibilityMenu toggleMenu={toggleMenu} />
      <ProfileButton />
    </header>
  );
}

export default Header;
