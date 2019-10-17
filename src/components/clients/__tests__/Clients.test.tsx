import * as React from 'react';
import { shallow } from 'enzyme';

import Clients from '../Clients';

it('matches snapshot', () => {
  const clients = shallow(
    <Clients
      clients ={[{
        branch:'test',
        clientName:'test',
        id: 123
      }]}
      createClient={({}) => null}
      fetchClients={()=> null}

    />
  );
  expect(clients).toMatchSnapshot();
});
