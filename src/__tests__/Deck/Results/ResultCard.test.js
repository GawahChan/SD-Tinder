import React from 'react';
import {shallow} from 'enzyme';
import ResultCard from '../../../Components/Deck/Results/ResultCard';

describe('ResultCard component', () => {
    const props = { img: 'Rosie-Mac', name: 'Rosie Mac'}
    const resultCard = shallow(<ResultCard {...props}/>)

    it('renders correctly', () => {
        expect(resultCard).toMatchSnapshot();
    });

})