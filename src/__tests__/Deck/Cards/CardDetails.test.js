import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from '../../../Components/Deck/Cards/CardDetails';
import Data from '../../../Data';

describe('CardDetails component', () => {
    let data = [Data[0]];
    let props = { stuntDouble: data };
    let cardDetails = shallow(<CardDetails {...props} />);

    it('renders correctly', () => {
        expect(cardDetails).toMatchSnapshot();
    });

    it('initialises `displayBio` state to false', () => {
        expect(cardDetails.state('displayBio')).toBe(false);
    });

    describe('toggleBio event handler', () => {

        beforeEach(() => {
            cardDetails.instance().toggleBio();
        })

        afterEach(() => {
            cardDetails.setState({ displayBio: false });
        });

        it('user clicks info button once, sets `displayBio` state to "true"', () => {

            expect(cardDetails.state('displayBio')).toBe(true);
        });

        it('user clicks info button twice, sets `displayBio` state to "false"', () => {
            cardDetails.instance().toggleBio();

            expect(cardDetails.state('displayBio')).toBe(false);
        });
    });
});