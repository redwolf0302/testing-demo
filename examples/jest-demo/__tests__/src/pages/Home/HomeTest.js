import React from 'react'
import {shallow} from 'enzyme';
import Home from '../../../../dist/src/pages/Home';

describe('Home correctly', () => {
    test('Home render', () => {
        let component = shallow(<Home/>);
        expect(component.find('img').props('className')).toEqual({"className": "home-logo", "src": "test-file-stub"});
    });
});