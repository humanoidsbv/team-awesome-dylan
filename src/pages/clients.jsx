import React from 'react';

import Clients from '../components/clients';
import Header from '../components/header/Header';
import Layout from '../components/layout/Layout';

export default () => (
  <>
    <Header />
    <Layout>
      <Clients />
    </Layout>
  </>
);
