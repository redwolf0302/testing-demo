import React from 'react';
import renderer from 'react-test-renderer';

describe('Avatar Correctly', () => {
    const Avatar = require('../../../dist/src/components/Avatar/Avatar').default;
    test('Avatar snapshot', () => {
        const tree = renderer.create(<Avatar width={30} height={30}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Avatar snapshot that has class name \'test\'', () => {
        const tree = renderer.create(<Avatar width={30} height={30} cls={'test'}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Avatar snapshot with imageUrl', () => {
        const tree = renderer.create(<Avatar width={30} height={30}
                                             imageUrl={'https://static.jk.cn/XXX.jpg'}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});