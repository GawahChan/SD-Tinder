import React from 'react';
import { shallow } from 'enzyme';
import CardDisplay from '../../../Components/Deck/Cards/CardDisplay';
import Data from '../../../Data';

describe('CardDisplay Component', () => {
    let mockAnimateAction = jest.fn();

    let data = [Data[0]];
    let props = { stuntDouble: data, animateAction: mockAnimateAction, action: '' }
    const cardDisplay = shallow(<CardDisplay {...props} />)

    it('renders correctly', () => {
        expect(cardDisplay).toMatchSnapshot();
    });

    describe('receiveAction event handler', () => {
        afterEach(() => {
            mockAnimateAction.mockClear();
            cardDisplay.setState({ actionType: '' });
        });

        describe('user clicks disliked button', () => {
            let id = 0;
            let actionType = 'dislike';

            it('passes data to `animateAction` Prop, also sets `actionType` state to "disliked"', () => {

                cardDisplay.instance().receiveAction(id, actionType);

                expect(mockAnimateAction).toHaveBeenCalledTimes(1);
                expect(mockAnimateAction).toHaveBeenCalledWith(id, actionType);
                expect(cardDisplay.state('actionType')).toEqual(actionType)
            });
        });

        describe('user clicks superliked button', () => {
            let id = 0;
            let actionType = 'superlike';

            it('passes data to `animateAction` Prop, also sets `actionType` state to "superliked"', () => {

                cardDisplay.instance().receiveAction(id, actionType);

                expect(mockAnimateAction).toHaveBeenCalledTimes(1);
                expect(mockAnimateAction).toHaveBeenCalledWith(id, actionType);
                expect(cardDisplay.state('actionType')).toEqual(actionType)
            });
        });

        describe('user clicks liked button', () => {
            let id = 0;
            let actionType = 'liked';

            it('passes data to `animateAction` Prop, also sets `actionType` state to "liked"', () => {

                cardDisplay.instance().receiveAction(id, actionType);

                expect(mockAnimateAction).toHaveBeenCalledTimes(1);
                expect(mockAnimateAction).toHaveBeenCalledWith(id, actionType);
                expect(cardDisplay.state('actionType')).toEqual(actionType)
            });
        });
    });
});