import 'jsdom-global/register';
import React from 'react';
import {mount} from 'enzyme';
import Chat from '../../../../dist/src/pages/IM/Chat';

describe('Chat correctly', () => {
    test('Chat', () => {
        let props = {
            match: {
                params: {
                    userId: 1,
                    friendId: 2
                }
            }
        };
        let component = mount(<Chat {...props}/>);
        component.update();
        expect(component.setState({
            messages: [
                {"id": 1, "from": 1, "to": 2, "type": 1, "content": "你好吗？在不？", "attachment": null}, {
                    "id": 3,
                    "from": 1,
                    "to": 2,
                    "type": 2,
                    "content": "",
                    "attachment": "https://static.jk.cn/T18.YTByhT1RCvBVdK.jpg"
                },
                {"id": 2, "from": 2, "to": 1, "type": 1, "content": "我在的", "attachment": ""},
                {"id": 5, "from": 2, "to": 1, "type": 1, "content": "我在的", "attachment": ""}]
        }).find('MessageItem').length).toEqual(4);
    });
});