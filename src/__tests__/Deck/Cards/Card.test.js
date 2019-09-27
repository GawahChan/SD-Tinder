import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../../Components/Deck/Cards/Card';
import Data from '../../../Data';

describe('Card Component', () => {
    let mockHandleAction = jest.fn();
    let data = [Data[0]]
    let props = { stuntDouble: data, handleAction: mockHandleAction }

    const card = shallow(<Card {...props} />);

    it('renders correctly', () => {
        expect(card).toMatchSnapshot();
    });

    it('initialises `action` state with empty string', () => {
        expect(card.state('action')).toBe('');
    });

    it('initialises `removeCard` state with false', () => {
        expect(card.state('removeCard')).toBe(false);
    });

    describe('animateAction helper function', () => {
        let id = 0;

        beforeEach(() => {
            mockHandleAction.mockClear();
        });
        afterEach(() => {
            card.setState({ action: '', removeCard: false });
        });

        describe('user selects liked', () => {
            let action = 'liked';
            let handleCardAnimation = { x: 400, opacity: 0 };

            it('updates `action` state with "liked", `removeCard` state with handleCardAnimation, passes data to parent through `handleAction` props', () => {
                card.instance().animateAction(id, action);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(handleCardAnimation);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
                expect(mockHandleAction).toHaveBeenCalledWith(id, action);
            });
        });

        describe('user selects disliked', () => {
            let action = 'disliked';
            let handleCardAnimation = { x: -400, opacity: 0 };

            it('updates `action` state with "disliked", `removeCard` state with handleCardAnimation, passes data to parent through `handleAction` props', () => {
                card.instance().animateAction(id, action);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(handleCardAnimation);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
                expect(mockHandleAction).toHaveBeenCalledWith(id, action);
            });
        });

        describe('user selects superliked', () => {
            let action = 'superliked';
            let handleCardAnimation = { y: -400, opacity: 0 };

            it('updates `action` state with "superliked", `removeCard` state with handleCardAnimation, passes data to parent through `handleAction` props', () => {
                card.instance().animateAction(id, action);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(handleCardAnimation);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
                expect(mockHandleAction).toHaveBeenCalledWith(id, action);
            });
        });
    });

    describe('handleDrag helper function', () => {
        afterEach(() => {
            card.setState({ action: '' });
        });
        describe('user drags card to hover over "liked" area', () => {
            let info = { point: { x: 40, y: 0 } }
            let action = 'liked';

            it('sets `action` state to "liked"', () => {
                card.instance().handleDrag(info);

                expect(card.state('action')).toEqual(action);
            });
        });

        describe('user drags card to hover over "disliked" area', () => {
            let info = { point: { x: -40, y: 0 } }
            let action = 'disliked';

            it('sets `action` state to "disliked"', () => {
                card.instance().handleDrag(info);

                expect(card.state('action')).toEqual(action);
            });
        });

        describe('user drags card to hover over "superliked" area', () => {
            let info = { point: { x: 0, y: -40 } }
            let action = 'superliked';

            it('sets `action` state to "superliked"', () => {
                card.instance().handleDrag(info);

                expect(card.state('action')).toEqual(action);
            });
        });
    });

    describe('handleDragEnd helper function', () => {
        let id = 0;

        beforeEach(() => {
            mockHandleAction.mockClear();
        });

        afterEach(() => {
            card.setState({action: '', removeCard: false})
        });

        describe('user drops card to trigger "liked" action', () => {
            let info = { point: { x: 140, y: 0 } }

            let action = 'liked'
            let handleCardAnimation = { x: 400, opacity: 0 }

            it('updates `action` state with "liked", `removeCard` with handleCardAnimation, passess data to parent through handleAction prop', () => {
                card.instance().handleDragEnd(id, info);

                expect(card.state('action')).toBe(action)
                expect(card.state('removeCard')).toEqual(handleCardAnimation)
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
                expect(mockHandleAction).toHaveBeenCalledWith(id, action);
            });
        });

        describe('user drops card to trigger "disliked" action', () => {
            let info = { point: { x: -140, y: 0 } }

            let action = 'disliked'
            let handleCardAnimation = { x: -400, opacity: 0 }

            it('updates `action` state with "disliked", `removeCard` with handleCardAnimation, passess data to parent through handleAction prop', () => {
                card.instance().handleDragEnd(id, info);

                expect(card.state('action')).toBe(action)
                expect(card.state('removeCard')).toEqual(handleCardAnimation)
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
                expect(mockHandleAction).toHaveBeenCalledWith(id, action);
            });
        });

        describe('user drops card to trigger "superliked" action', () => {
            let info = { point: { x: 0, y: -140 } }

            let action = 'superliked'
            let handleCardAnimation = { y: -400, opacity: 0 }

            it('updates `action` state with "superliked", `removeCard` with handleCardAnimation, passess data to parent through handleAction prop', () => {
                card.instance().handleDragEnd(id, info);

                expect(card.state('action')).toBe(action)
                expect(card.state('removeCard')).toEqual(handleCardAnimation)
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
                expect(mockHandleAction).toHaveBeenCalledWith(id, action);
            });
        });
    });
});