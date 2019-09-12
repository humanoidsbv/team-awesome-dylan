import React from 'react';

import Header from '../components/header/Header';
import TimeEntries from '../components/time-entries/TimeEntries';
import NewTimeEntry from '../components/new-time-entry/NewTimeEntry';
import TimeForm from '../components/time-form/TimeForm';

export default () => (
  <div>
    <Header />
    <div
      style={{
        maxWidth: '1170px',
        margin: '0 auto',
        padding: '100px 16px 0 16px'
      }}
    >
      <TimeForm />
      <NewTimeEntry />
      <TimeEntries />
    </div>
  </div>
);
