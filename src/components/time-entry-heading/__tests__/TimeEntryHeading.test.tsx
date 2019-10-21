import * as React from 'react';
import { shallow } from 'enzyme';

import TimeEntryHeading from '../TimeEntryHeading';

it('matches snapshot', () => {
  const timeEntryHeading = shallow(
    <TimeEntryHeading
      startTimestamp='2019-10-16T10:00:00.000Z'
    />
  );
  expect(timeEntryHeading).toMatchSnapshot();
});
