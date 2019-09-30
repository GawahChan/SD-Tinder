import React from 'react';
import { shallow } from 'enzyme';
import Result from '../../../Components/Deck/Results/Result';
import { ResultSubTitle } from '../../../Components/Deck/Results/style';

import Data from '../../../Data';

describe('Result Component', () => {
    let data = [Data[0], Data[1], Data[2]];

    let props = { stuntDouble: data, title: 'Title', subTitle: 'subtitle' }
    let result = shallow(<Result  {...props} />)

    it('renders correctly', () => {
        expect(result).toMatchSnapshot();
    });

    it('renders in <ResultCard /> 3 times due to props above', () => {
        expect(result.find('ResultCard').length).toEqual(3);
    });

    it('does not render <ResultSubTitle />', () => {
        expect(result.find(ResultSubTitle).length).toEqual(0);
    });

    describe('When there are no props in stuntDouble', () => {
        let props = { stuntDouble: [], title: 'Title', subTitle: 'subTitle' }
        let result = shallow(<Result {...props} />)

        it('Does not render <ResultCard />', () => {
            expect(result.find('ResultCard').length).toEqual(0);
        });

        it('Renders the <ResultSubTitle /> instead', () => {
            expect(result.find(ResultSubTitle).length).toEqual(1);
        });
    });
});