import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Avatar from '../../../dist/src/components/Avatar/Avatar';

describe('Avatar Correctly', () => {
    test('Avatar snapshot', () => {
        const tree = renderer.create(<Avatar width={30} height={30}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Avatar snapshot that has class name \'test\'', () => {
        const tree = renderer.create(<Avatar width={30} height={30} cls={'test'}/>).toJSON();
        expect(tree).toBeNull();
        expect(tree).toMatchSnapshot();
    });
    test('Avatar snapshot with imageUrl', () => {
        const tree = renderer.create(<Avatar width={30} height={30}
                                             imageUrl={'https://static.jk.cn/XXX.jpg'}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Avatar snapshot simulate event error with defaultUrl', () => {
        const avatarCmp = shallow(<Avatar width={30} height={30}
                                          imageUrl={'https://static.jk.cn/XXX.jpg'}
                                          defaultUrl={'https://static.jk.cn/default-user.jpg'}/>);
        //TODO: 这里有个问题，因为enzyme事件模拟暂时无法完成DOM操作
        avatarCmp.find('img').simulate('error', {
            target: {
                setAttribute: function (n, v) {
                }
            }
        });
        expect(avatarCmp).toMatchSnapshot();
    });

    test('Avatar snapshot simulate error event without defaultUrl', () => {
        const avatarCmp = shallow(<Avatar width={30} height={30}
                                          imageUrl={'https://static.jk.cn/XXX.jpg'}/>);
        //TODO: 这里有个问题，因为enzyme事件模拟暂时无法完成DOM操作
        avatarCmp.find('img').simulate('error', {
            target: {
                setAttribute: function (n, v) {
                }
            }
        });
        expect(avatarCmp).toMatchSnapshot();
    });

    test('Avatar snapshot simulate event error with defaultUrl', () => {
        const avatarCmp = shallow(<Avatar width={30} height={30}
                                          imageUrl={'https://static.jk.cn/XXX.jpg'}
                                          defaultUrl={'https://static.jk.cn/default-user.jpg'}/>);
        avatarCmp.find('img').simulate('load');
        expect(avatarCmp).toMatchSnapshot();
    });

    test('Avatar snapshot with onClick', () => {
        const avatarCmp = shallow(<Avatar width={30} height={30}
                                          imageUrl={'https://static.jk.cn/XXX.jpg'}
                                          onClick={() => {
                                          }}/>);
        expect(avatarCmp).toMatchSnapshot();
    });

    test('Avatar snapshot simulate event click without onClick', () => {
        const avatarCmp = shallow(<Avatar width={30} height={30}
                                          imageUrl={'https://static.jk.cn/XXX.jpg'}/>);
        avatarCmp.simulate('click');
        expect(avatarCmp).toMatchSnapshot();
    });
});