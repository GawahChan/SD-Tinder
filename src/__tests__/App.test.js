import React from 'react';
import { shallow } from 'enzyme';
import App from '../Components/App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('initializes the liked `state` with an empty array', () => {
        expect(app.state('liked')).toEqual([]);
    })

    describe('user Likes a profile', () => {
        const id = 0;
        const liked = {id: 0, name: 'Mila Kunis', age: '36', location: 'LA, USA', bio: 'Actress' }
        beforeEach(() => {
            app.instance().liked(id);
        });

        it('adds the liked profile to the state `liked`', () => {
            expect(app.state('liked')).toHaveLength(1);
            expect(app.state('liked')).toContainEqual(liked);
        });

        it('removes the liked profile from the state `stuntDoubleList`', () => {
            expect(app.state('stuntDoubleList')).not.toContain(liked)
        });
    })
})