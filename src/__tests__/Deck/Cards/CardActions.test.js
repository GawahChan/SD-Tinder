import React from 'react';
import { shallow } from 'enzyme';
import CardActions from '../../../Components/Deck/Cards/CardActions';
import {CardLikedButton, CardDislikedButton, CardSuperlikedButton} from '../../../Components/Deck/Cards/style';


describe('CardActions component', () => {
    let mockReceiveAction = jest.fn()
    let props = { id: 0, receiveAction: mockReceiveAction }
    let cardActions = shallow(<CardActions {...props} />)


    it('renders correctly', () => {
        expect(cardActions).toMatchSnapshot();
    });

    it('renders three buttons, one action type each', () => {
        expect(cardActions.children()).toHaveLength(3);

        expect(cardActions.find(CardLikedButton)).toHaveLength(1);
        expect(cardActions.find(CardDislikedButton)).toHaveLength(1);
        expect(cardActions.find(CardSuperlikedButton)).toHaveLength(1);
    });

    describe('onTap buttons', () => {
        let id = 0;

        beforeEach(() => {
            mockReceiveAction.mockClear()
        });

        it('disliked button calls `receiveAction` prop', () => {
            let action = 'disliked'

            cardActions.find(CardDislikedButton).props().onTap();

            expect(mockReceiveAction).toHaveBeenCalledTimes(1);
            expect(mockReceiveAction).toHaveBeenCalledWith(id, action);
        });
        
        it('superliked button calls `receiveAction` prop', () => {
            let action = 'superliked'

            cardActions.find(CardSuperlikedButton).props().onTap();

            expect(mockReceiveAction).toHaveBeenCalledTimes(1);
            expect(mockReceiveAction).toHaveBeenCalledWith(id, action);
        });

        it('liked button calls `receiveAction` prop', () => {
            let action = 'liked'

            cardActions.find(CardLikedButton).props().onTap();

            expect(mockReceiveAction).toHaveBeenCalledTimes(1);
            expect(mockReceiveAction).toHaveBeenCalledWith(id, action);
        });
    })

});