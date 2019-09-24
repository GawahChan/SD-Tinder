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

    describe('user clicks an action button', () => {
        afterEach(() => {
            mockHandleAction.mockClear();
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

    describe('toggleBio event handler', () => {
        beforeEach(() => {
            card.instance().toggleBio();
        })

        afterEach(() => {
            card.setState({ displayBio: false });
        })
        it('toggles the `displayBio` state', () => {
            expect(card.state('displayBio')).toBe(true);
        });
    });
});