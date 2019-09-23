import React from 'react';
import {shallow} from 'enzyme';
import ResultCard from '../Components/Result/ResultCard';

describe('ResultCard component', () => {
    const props = { img: 'Jennifer-Lawrence', name: 'Jennifer Lawrence'}
    const resultCard = shallow(<ResultCard {...props}/>)

    it('renders correctly', () => {
        expect(resultCard).toMatchSnapshot();
    });

})