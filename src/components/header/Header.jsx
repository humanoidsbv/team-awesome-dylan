import React, { useState } from 'react';

import Logo from '../logo/Logo';
import MenuToggle from '../menu-toggle/MenuToggle';
import Navigation from '../navigation/Navigation';
import ProfileButton from '../profile-button/ProfileButton';
import styles from './Header.module.css';

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
      <MenuToggle visibilityMenu={visibilityMenu} toggleMenu={toggleMenu} />
      <ProfileButton />
    </header>
  );
}

export default Header;
