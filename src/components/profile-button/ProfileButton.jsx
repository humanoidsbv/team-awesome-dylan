import React from 'react';

import employeeAvatar from '../../../static/pictures/picture-tnt.jpg';
import HumanoidsIcon from '../../assets/icons/logo-humanoids.svg';
import MenuDownIcon from '../../assets/icons/icon-arrow-down.svg';
import styles from './ProfileButton.module.css';

const ProfileButton = () => (
  <div className={styles.containerMenuDownEmployeeAvatar}>
    <button type="button" className={styles.profilebutton}>
      <HumanoidsIcon className={styles.humanoidsIcon} />
      <img className={styles.employeeAvatar} src={employeeAvatar} alt="Logo" />
    </button>
    <MenuDownIcon className={styles.menuDownIcon} />
  </div>
);

export default ProfileButton;
