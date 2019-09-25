import React from 'react';
import { shallow } from 'enzyme'
import Card from '../Components/Card/Card';
import Data from '../Data';

describe('Card Component', () => {
    const mockHandleAction = jest.fn()
    const props = Data[0];

    const card = shallow(<Card {...props} handleAction={mockHandleAction} />);

    const likedAnimation = { x: 300, opacity: 0 };
    const dislikedAnimation = { x: -300, opacity: 0 };
    const superlikedAnimation = { y: -300, opacity: 0 };

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

        const likedAnimation = { x: 300, opacity: 0 };
        const dislikedAnimation = { x: -300, opacity: 0 };
        const superlikedAnimation = { y: -300, opacity: 0 }

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

            it('User swipes right to like, updates `action` state with "liked", updates `removeCard` state with animation, updates parent through the `handleAction` prop', () => {
                let action = 'liked';
                let event = '';
                let info = { point: { x: 140, y: 0 } };
                card.instance().handleDragEnd(event, info);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(likedAnimation);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
            });

            it('User swipes left to dislike, updates `action` state with "disliked", updates `removeCard` state with animation, updates parent through the `handleAction` prop', () => {
                let action = 'disliked';
                let event = '';
                let info = { point: { x: -140, y: 0 } };
                card.instance().handleDragEnd(event, info);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(dislikedAnimation);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
            });

            it('User swipes up to superlike, updates `action` with "superliked", updates `removeCard` state with animation,updates parent through the `handleAction` prop', () => {
                let action = 'superliked';
                let event = '';
                let info = { point: { x: 0, y: -140 } };
                card.instance().handleDragEnd(event, info);

                expect(card.state('action')).toEqual(action);
                expect(card.state('removeCard')).toEqual(superlikedAnimation);
                expect(mockHandleAction).toHaveBeenCalledTimes(1);
            });
        });
    });

    describe('user clicks an action button', () => {
        let propsId = 0;

        beforeEach(() => {
            mockHandleAction.mockClear();
        })
        afterEach(() => {
            card.setState({ displatBio: false, action: '', removeCard: false })
        });

        it('event handler sets `action` state to "disliked" and `removeCard` state with animation', () => {
            let actionName = 'disliked';

            card.instance().action(propsId, actionName)

            expect(card.state('action')).toBe(actionName)
            expect(card.state('removeCard')).toEqual(dislikedAnimation)
            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        })

        it('event handler sets `action` state to "superliked" and `removeCard` state with animation', () => {
            let actionName = 'superliked';
            
            card.instance().action(propsId, actionName)

            expect(card.state('action')).toBe(actionName)
            expect(card.state('removeCard')).toEqual(superlikedAnimation)
            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        });

        it('event handler sets `action` state to "liked" and `removeCard` state with animation', () => {
            let actionName = 'liked';

            card.instance().action(propsId, actionName)

            expect(card.state('action')).toBe(actionName)
            expect(card.state('removeCard')).toEqual(likedAnimation)
            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        });
    });
});