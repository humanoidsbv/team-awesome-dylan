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
      }]}
      createTimeEntry={({}) => null}
    />
  );
  expect(timeEntryForm).toMatchSnapshot();
});
