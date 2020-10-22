import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('it renders the Congrats component', () => {
    const wrapper = shallow(<Congrats />)
    const congratsComponent = wrapper.find(`[data-test="congrats-component"]`)
    expect(congratsComponent.length).toBe(1)
})