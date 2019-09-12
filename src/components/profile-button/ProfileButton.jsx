import React from 'react';

import styles from './ProfileButton.module.css';

const ProfileButton = () => (
  <button className={styles.profilebutton}>
    <span className={styles.humanoidsIcon}>-</span>
    <span className={styles.photo}>0</span>
  </button>
);

export default ProfileButton;
