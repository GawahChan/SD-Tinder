import React from 'react';
import { shallow } from 'enzyme'
import Card from '../Components/Card/Card';

describe('Card Component', () => {
    const mockHandleAction = jest.fn()
    const props = {id: 0, name: 'Mila Kunis', img: 'Mila-Kunis', age: 'age', location:'location', bio:'bio', handleAction: mockHandleAction }
   
    const card = shallow(<Card {...props} />);

    it('renders correctly', () => {
        expect(card).toMatchSnapshot();
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
    })
})