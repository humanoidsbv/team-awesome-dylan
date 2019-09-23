import React from 'react';

import styles from './NewTimeEntryButton.module.css';

const NewTimeEntryButton = () => {
  return (
    <button type="button" className={styles.NewTimeEntry}>
      + New Time Entry
    </button>
  );
};

export default NewTimeEntryButton;
