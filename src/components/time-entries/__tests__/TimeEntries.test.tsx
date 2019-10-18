import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntries from '../TimeEntries';

const mockedTimeEntries = [{
  client:{
    branch: '123',
    clientName: '123',
    contactPerson: 'test',
    contactPhoneNumber: 'test',
    id: 123,
    locality: '123',
    postalCode: '123'
  },
  id: 123,
  startTimestamp: 'bla',
  stopTimestamp: 'bla'
}]

const mockedClients = [{
  branch:'test',
  clientName:'test',
  id: 123
}];

it('matches snapshot', () => {
  const timeEntries = shallow(
    <TimeEntries
      clients ={mockedClients}
      timeEntries={mockedTimeEntries}
      createTimeEntry={({}) => null}
      deleteTimeEntry={(id: number) => null}
      fetchTimeEntries={()=> null}
      fetchClients={()=> null}
      filterTimeEntriesByClient={(id: number) => null}
    />
  );
  expect(timeEntries).toMatchSnapshot();
});
