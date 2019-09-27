import React from 'react';
import { shallow } from 'enzyme';
import Cards from '../../../Components/Deck/Cards/Cards';
import Data from '../../../Data';

describe('Cards Component', () => {
    let data = [Data[0]];

    let props = { stuntDoubleList: data }
    let cards = shallow(<Cards {...props} />)

    it('renders correctly', () => {
        expect(cards).toMatchSnapshot();
    });

    it('<Card /> Component is rendered when there is data in stuntDoubleList prop', () => {
        expect(cards.find('Card').exists()).toBe(true);
    });

    describe('when there is no data in stuntDoubleList prop', () => {
        let data = [];
        let props = { stuntDoubleList: data};
        let cards = shallow(<Cards {...props} />)

        it('Does NOT render <Card /> Component', () => {
            expect(cards.find('Card').exists()).toBe(false);
        });
    });

})
