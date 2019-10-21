import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntryHeading from '../TimeEntryHeading';

it('matches snapshot', () => {
  const timeEntryHeading = shallow(
    <TimeEntryHeading
      startTimestamp='test'
    />
  );
  expect(timeEntryHeading).toMatchSnapshot();
});
