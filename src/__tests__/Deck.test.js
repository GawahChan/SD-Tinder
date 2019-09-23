import React from 'react';
import { shallow } from 'enzyme';
import Deck from '../Components/Deck/Deck';
import Data from '../Data';

describe('Deck component', () => {
    const deck = shallow(<Deck />);


    it('renders correctly', () => {
        expect(deck).toMatchSnapshot();
    })

    it('initializes the `stuntDoubleList` state with Data', () => {
        expect(deck.state('stuntDoubleList')).toEqual(Data);
    })

    it('initializes the `disliked` state with an empty array', () => {
        expect(deck.state('disliked')).toEqual([]);
    })

    it('initializes the `superliked` state with an empty array', () => {
        expect(deck.state('superliked')).toEqual([]);
    })

    it('initializes the `liked` state with an empty array', () => {
        expect(deck.state('liked')).toEqual([]);
    })

    describe('user clicks on an action', () => {
        const id = 0;
        const profile = Data[0]

        describe('user likes a profile', () => {
            const action = 'liked'

            beforeEach(() => {
                deck.instance().handleAction(id, action);
            });

            afterEach(() => {
                deck.setState({ liked: [], stuntDoubleList: Data });
            });

            it('adds profile to the state `liked`', () => {
                expect(deck.state(action)).toHaveLength(1);
                expect(deck.state(action)).toContainEqual(profile);
            });

            it('removes profile from the state `stuntDoubleList`', () => {
                expect(deck.state('stuntDoubleList')).not.toContain(profile);
            });
        });

        describe('user superlikes a profile', () => {
            const action = 'superliked';

            beforeEach(() => {
                deck.instance().handleAction(id, action);
            });

            afterEach(() => {
                deck.setState({ superliked: [], stuntDoubleList: Data });
            });

            it('adds profile to the state `superliked`', () => {
                expect(deck.state(action)).toHaveLength(1);
                expect(deck.state(action)).toContainEqual(profile);
            });

            it('removes profile from the state `stuntDoubleList`', () => {
                expect(deck.state('stuntDoubleList')).not.toContain(profile);
            });
        });

        describe('user dislikes a profile', () => {
            const action = 'disliked';

            beforeEach(() => {
                deck.instance().handleAction(id, action);
            });

            afterEach(() => {
                deck.setState({ disliked: [], stuntDoubleList: Data });
            });

            it('adds profile to the state `superliked`', () => {
                expect(deck.state(action)).toHaveLength(1);
                expect(deck.state(action)).toContainEqual(profile);
            });

            it('removes profile from the state `stuntDoubleList`', () => {
                expect(deck.state('stuntDoubleList')).not.toContain(profile);
            });
        });
    });

    describe('when user finishes going through the profiles', () => {
        beforeEach(() => {
            deck.setState({ stuntDoubleList: [] });
        });
        afterEach(() => {
            deck.setState({ stuntDoubleList: Data });
        });
        
        it('renders <Results/> component', () => {
            expect(deck.find('.deck').children('Result').length).toEqual(1);
        });
    });
});