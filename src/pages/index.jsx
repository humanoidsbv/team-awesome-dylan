import React from 'react';

import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import NewTimeEntry from '../components/new-time-entry/NewTimeEntry';
import TimeEntries from '../components/time-entries/TimeEntries';

export default () => (
  <Layout>
    <Header />
    <NewTimeEntry />
    <TimeEntries />
  </Layout>
);
