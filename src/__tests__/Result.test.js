import React from 'react';
import { shallow } from 'enzyme';
import Result from '../Components/Result/Result';
import Data from '../Data';

describe('Result component', () => {
    let props = { liked: [Data[0]], superliked: [Data[1]], disliked: [Data[2]]}
    let result = shallow(<Result {...props}/>);

    it('renders correctly', () => {
        expect(result).toMatchSnapshot();
    });

    it('renders <ResultCard/> once for each prop', () => {
        expect(result.find('ResultCard').length).toEqual(3);
        expect(result.find('.result-profiles.superliked').children('ResultCard').length).toEqual(1);
        expect(result.find('.result-profiles.liked').children('ResultCard').length).toEqual(1);
        expect(result.find('.result-profiles.disliked').children('ResultCard').length).toEqual(1);
    });

    describe('Result component where all props have no data', () => {
        let props = { liked: [], superliked: [], disliked: []}
        let result = shallow(<Result {...props}/>);

        it('does not render <ResultCard/> for .result-propiles.superliked', () => {
            expect(result.find('.result-profiles.superliked').children('ResultCard').length).toEqual(0);
            expect(result.find('.result-profiles.superliked').children('h3').length).toEqual(1);
        });
        it('does not render <ResultCard/> for .result-propiles.liked', () => {
            expect(result.find('.result-profiles.liked').children('ResultCard').length).toEqual(0);
            expect(result.find('.result-profiles.liked').children('h3').length).toEqual(1);
        })
        it('does not render <ResultCard/> for .result-propiles.disliked', () => {
            expect(result.find('.result-profiles.disliked').children('ResultCard').length).toEqual(0);
            expect(result.find('.result-profiles.disliked').children('h3').length).toEqual(1);
        })
    });








})