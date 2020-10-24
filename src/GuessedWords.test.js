import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';


const setup = (props = {}) => {
    return shallow(<GuessedWords {...props} />)
}

test('renders the GuessedWords component', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'component-guessedWords')
    expect(component.length).toBe(1)
})