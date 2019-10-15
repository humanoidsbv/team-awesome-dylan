import React from 'react';

import styles from './Layout.module.css';

interface LayoutInterface {
  children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutInterface): React.ReactElement => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
