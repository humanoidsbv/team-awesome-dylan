import * as React from 'react';
import { shallow } from 'enzyme';

import MenuToggle from '../MenuToggle';

it('matches snapshot', () => {
  const menuToggle = shallow(
    <MenuToggle
    isMenuVisible= {true}
    toggleMenu={() => null}
    />
  );
  expect(menuToggle).toMatchSnapshot();
});
