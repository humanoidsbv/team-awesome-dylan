import React from 'react';

import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import TimeEntriesContainer from '../components/time-entries/TimeEntriesContainer';

export default () => (
  <Layout>
    <Header />
    <TimeEntriesContainer />
  </Layout>
);
