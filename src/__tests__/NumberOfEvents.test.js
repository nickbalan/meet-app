import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents={() => {}} />)
    });

    test('render text input', () => {
        expect(NumberOfEventsWrapper.find('.event-number')).toHaveLength(1);
    });

    /* test('render text input correctly', () => {
        expect(NumberOfEventsWrapper.find('.event-number').prop('value')).toBe(32);
    }); */

    test("render number of events", () => {
        expect(NumberOfEventsWrapper.find(".numberOfEvents")).toHaveLength(0);
      });
    
      test("render lable for numberOfEvents", () => {
        expect(NumberOfEventsWrapper.find(".event-lable")).toHaveLength(1);
      });
    
      test("render input for numberOfEvents", () => {
        expect(NumberOfEventsWrapper.find(".event-number")).toHaveLength(1);
      });
    
      test("render number of events 32 by default", () => {
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
      });
    
      test("changed number of Event state, when input number is changed by user", () => {
        const eventObject = { target: { value: 16 } };
        NumberOfEventsWrapper.find(".event-number").simulate("change", eventObject);
        expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(16);
      });

});