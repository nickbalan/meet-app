import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />)
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
    });

    test('render text input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.prop('numberOfEvents');
        expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(numberOfEvents);
    });

});