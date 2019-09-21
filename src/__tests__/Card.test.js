import React from 'react';
import { shallow } from 'enzyme'
import Card from '../Components/Card/Card';

describe('Card Component', () => {
    const props = {name: 'Mila Kunis', age: 'age', location:'location', bio:'bio' }
    const card = shallow(<Card {...props} />);


    it('renders correctly', () => {
        expect(card).toMatchSnapshot();
    });
})