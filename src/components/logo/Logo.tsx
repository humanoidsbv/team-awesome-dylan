import React from 'react';

import styles from './Logo.module.css';

const Logo = (): React.ReactElement => (
  <a className={styles.logo} href="/">
    team awesome
  </a>
);

export default Logo;
