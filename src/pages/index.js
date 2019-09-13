import React from 'react';

import Header from '../components/header/Header';
import NewTimeEntry from '../components/new-time-entry/NewTimeEntry';
import TimeEntries from '../components/time-entries/TimeEntries';
import Layout from '../components/layout/Layout';

export default () => (
  <Layout>
    <Header />
    <NewTimeEntry />
    <TimeEntries />
  </Layout>
);
