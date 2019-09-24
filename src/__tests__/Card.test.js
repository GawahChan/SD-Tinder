import React from 'react';
import { shallow } from 'enzyme'
import Card from '../Components/Card/Card';
import Data from '../Data';

describe('Card Component', () => {
    const mockHandleAction = jest.fn()
    const props = Data[0];
   
    const card = shallow(<Card {...props} handleAction = {mockHandleAction} />);

    it('renders correctly', () => {
        expect(card).toMatchSnapshot();
    });

    it('initialises the `display bio` state as false', () => {
        expect(card.state('displayBio')).toBe(false);
    });

    describe('user clicks an action button', () => {
        afterEach(() => {
            mockHandleAction.mockClear();
        });

        it('disliked button calls event handler', () => {
            card.find('.disliked').simulate('Click', { currentTarget: {className: 'disliked'}})

            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        })

        it('superliked button calls event handler', () => {
            card.find('.superliked').simulate('Click', { currentTarget: {className: 'superliked'}})

            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        });

        it('liked button calls event handler', () => {
            card.find('.liked').simulate('Click', { currentTarget: {className: 'liked'}})

            expect(mockHandleAction).toHaveBeenCalledTimes(1);
        });
    });

    describe('toggleBio event handler', () => {
        beforeEach(() => {
            card.instance().toggleBio();
        })

        afterEach(() => {
            card.setState({displayBio: false});
        })
        it('toggles the `displayBio` state', () => {
            expect(card.state('displayBio')).toBe(true);
        });
    });
});