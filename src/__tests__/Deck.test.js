import React from 'react';
import { shallow } from 'enzyme';
import Deck from '../Components/Deck/Deck';

describe('Deck component', () => {
    const deck = shallow(<Deck />);
    const id = 0;
    const profile = { id: 0, name: 'Mila Kunis', img: 'Mila-Kunis', age: '36', location: 'LA, USA', bio: 'Actress' }

    it('renders correctly', () => {
        expect(deck).toMatchSnapshot();
    })

    it('initializes the liked `state` with an empty array', () => {
        expect(deck.state('liked')).toEqual([]);
    })

    describe('user Likes a profile', () => {
        beforeEach(() => {
            deck.instance().liked(id);
        });

        it('adds the liked profile to the state `liked`', () => {
            expect(deck.state('liked')).toHaveLength(1);
            expect(deck.state('liked')).toContainEqual(profile);
        });

        it('removes the liked profile from the state `stuntDoubleList`', () => {
            expect(deck.state('stuntDoubleList')).not.toContain(profile)
        });
    })
})