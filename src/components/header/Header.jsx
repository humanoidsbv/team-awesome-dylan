import React from 'react';

import styles from './Header.module.css';
import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import MenuToggle from '../menu-toggle/MenuToggle';
import ProfileButton from '../profile-button/ProfileButton';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuVisible: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { isMenuVisible } = this.state;
    this.setState({ isMenuVisible: !isMenuVisible });
  }

  render() {
    const { isMenuVisible } = this.state;
    return (
      <header
        className={`${styles.header} ${
          isMenuVisible ? styles.headerMenuVisible : ''
        }`}
      >
        <Logo />
        <Navigation isMenuVisible={isMenuVisible} />
        <MenuToggle
          isMenuVisible={isMenuVisible}
          toggleMenu={this.toggleMenu}
        />
        <ProfileButton />
      </header>
    );
  }
}

export default Header;
