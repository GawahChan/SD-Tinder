import React from 'react';
import { shallow } from 'enzyme'
import Card from '../Components/Card/Card';
import Data from '../Data';

describe('Card Component', () => {
    const mockHandleAction = jest.fn()
    const props = Data[0];

    const card = shallow(<Card {...props} handleAction={mockHandleAction} />);

    it('renders correctly', () => {
        expect(card).toMatchSnapshot();
    });

    it('initialises the `display bio` state as false', () => {
        expect(card.state('displayBio')).toBe(false);
    });

    it('initialises the `action` state to ""', () => {
        expect(card.state('action')).toBe('');
    });

    it('initialises the `removeCard` state to false', () => {
        expect(card.state('removeCard')).toBe(false);
    });

    describe('toggleBio event handler', () => {
        beforeEach(() => {
            card.instance().toggleBio();
        });

        afterEach(() => {
            card.setState({ displayBio: false });
        });

        it('toggles the `displayBio` state', () => {
            expect(card.state('displayBio')).toBe(true);
        });
    });

    describe('Card drag actions', () => {

        describe('User ONLY drags the card to DISPLAY the action, doesnt actually chose an action yet', () => {
            afterEach(() => {
                card.setState({ action: "" })
            });

            it('user drags card over `liked` area and `handDrag` event handler sets the state `action` to `liked`', () => {
                let event = '';
                let info = { point: { x: 50, y: 0 } }
                card.instance().handleDrag(event, info);

                expect(card.state('action')).toEqual('liked');
            });
            it('user drags card over `disliked` area and `handDrag` event handler sets the state `action` to `disliked`', () => {
                let event = '';
                let info = { point: { x: -50, y: 0 } }
                card.instance().handleDrag(event, info);

                expect(card.state('action')).toEqual('disliked');
            });
            it('user drags card over `superliked` area and `handDrag` event handler sets the state `action` to `superliked`', () => {
                let event = '';
                let info = { point: { x: 0, y: -50 } }
                card.instance().handleDrag(event, info);

                expect(card.state('action')).toEqual('superliked');
            });
        });

        describe('User drags the card to choose an action, calls event handler `handleDragEnd`', () => {
            beforeEach(() => {
                mockHandleAction.mockClear();
            });
            afterEach(() => {
                card.setState({ action: "", removeCard: false })
            });

            it('User swipes right to like, updates `action` and `removeCard` states with "liked" as well updates the parent through the `handleAction` prop', () => {
                let action = 'liked';
                let event = '';
                let info = { point: { x: 140, y: 0 } };
                card.instance().handleDragEnd(event, info);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(action);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
            });

            it('User swipes right to dislike, updates `action` and `removeCard` states with "disliked" as well updates the parent through the `handleAction` prop', () => {
                let action = 'disliked';
                let event = '';
                let info = { point: { x: -140, y: 0 } };
                card.instance().handleDragEnd(event, info);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(action);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
            });

            it('User swipes right to superlike, updates `action` and `removeCard` states with "superliked" as well updates the parent through the `handleAction` prop', () => {
                let action = 'superliked';
                let event = '';
                let info = { point: { x: 0, y: -140 } };
                card.instance().handleDragEnd(event, info);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(action);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe('user clicks an action button', () => {

        beforeEach(() => {
            mockHandleAction.mockClear();
        })
        afterEach(() => {
            card.setState({ displatBio: false, action: '', removeCard: false })
        });

        it('disliked button calls event handler', () => {
            let actionName = 'disliked';
            card.find(`.${actionName}`).simulate('Click', { currentTarget: { className: 'disliked' } })

            expect(card.state('action')).toBe(actionName)
            expect(card.state('removeCard')).toBe(actionName)
            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        })

        it('superliked button calls event handler', () => {
            let actionName = 'superliked';
            card.find(`.${actionName}`).simulate('Click', { currentTarget: { className: 'superliked' } })

            expect(card.state('action')).toBe(actionName)
            expect(card.state('removeCard')).toBe(actionName)
            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        });

        it('liked button calls event handler', () => {
            let actionName = 'liked';
            card.find(`.${actionName}`).simulate('Click', { currentTarget: { className: 'liked' } })

            expect(card.state('action')).toBe(actionName)
            expect(card.state('removeCard')).toBe(actionName)
            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        });
    });
});