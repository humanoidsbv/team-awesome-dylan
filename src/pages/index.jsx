import React from 'react';

import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import TimeEntries from '../components/time-entries/TimeEntries';
import TimeEntryForm from '../components/time-entry-form/TimeEntryForm';

export default () => (
  <Layout>
    <Header />
    <TimeEntryForm />
    <TimeEntries />
  </Layout>
);
