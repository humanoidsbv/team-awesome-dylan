import * as React from 'react';
import { mount, shallow } from 'enzyme';

import Clients from '../Clients';

describe('Clients', () => {
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

  it('client entry form only shows when clicking the button', () => {
    const clients = mount(
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
    
    expect(clients.find('.clientForm').prop('className').includes('clientFormHide')).toBe(true);

    clients.find('.newClientButton').simulate('click');

    expect(clients.find('.clientForm').prop('className').includes('clientFormHide')).not.toBe(true);
  })
});
