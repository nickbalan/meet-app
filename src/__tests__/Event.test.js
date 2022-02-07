import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {

    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('Verifies whether the event has been rendered', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('Verifies whether the date and timezone has been rendered', () => {
        expect(EventWrapper.find(".start-date")).toHaveLength(1);
    });

    test('Verifies whether the summary has been rendered', () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
    });

    test('Verifies whether the location has been rendered', () => {
        expect(EventWrapper.find(".location")).toHaveLength(1);
    });
    
    test('Verifies whether the button has been rendered', () => {
        expect(EventWrapper.find(".show-details-btn")).toHaveLength(1);
    });

    test('Verifies whether the element is collapsed by default', () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
    });

    test('Verifies whether extra info is shown when a user clicks on a Show details button', () => {
        EventWrapper.setState({collapsed: true,});
        EventWrapper.find(".show-details-btn").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(false);
    });

    test('Verifies whether extra info is hide when a user clicks on a Hide details button', () => {
        EventWrapper.setState({collapsed: false,});
        EventWrapper.find(".hide-details-btn").simulate("click");
        expect(EventWrapper.state("collapsed")).toBe(true);
    });

});