import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import Congrats from './Congrats';


const setup = (props = {}) => {
    return shallow(<Congrats {...props} />)
}

test('renders the Congrats component', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no text when success prop is false', () => {
    const wrapper = setup({ success: false })
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')

})

test('renders text when success prop is true', () => {
    const wrapper = setup({ success: true })
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text().length).not.toBe(0)
})

test('does not throw warning with expected props', () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
})