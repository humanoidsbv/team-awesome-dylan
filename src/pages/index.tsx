import React from 'react';

import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';
import TimeEntries from '../components/time-entries';

export default (): React.ReactElement => (
  <Layout>
    <Header />
    <TimeEntries />
  </Layout>
);
