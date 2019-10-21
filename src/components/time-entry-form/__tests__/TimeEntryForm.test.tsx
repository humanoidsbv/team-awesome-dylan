import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntryForm from '../TimeEntryForm';

it('matches snapshot', () => {
  const timeEntryForm = shallow(
    <TimeEntryForm
      isTimeEntryFormVisible={true}
      toggleTimeEntryForm={() => {}}
      clients ={[{
        branch:'test',
        clientName:'test',
        id: 123
      }]}
      createTimeEntry={({}) => null}
    />
  );
  expect(timeEntryForm).toMatchSnapshot();
});
