import * as React from 'react';
import { shallow } from 'enzyme';

import ClientForm from '../ClientForm';

it('matches snapshot', () => {
  const clientForm = shallow(
    <ClientForm
      isClientFormVisible={true}
      createClient={({}) => {}}
      toggleClientForm={() => null}
    />
  );
  expect(clientForm).toMatchSnapshot();
});
