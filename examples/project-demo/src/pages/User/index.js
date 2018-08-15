import React from 'react';
import {Link} from 'react-router-dom';

export default class User extends React.Component {
    render() {
        return (
            <div>
                User
                <Link className='btn' to={'/im/friends/123'}>Friend#123</Link>
                <Link className='btn' to={'/im/chat/123/123'}>Chat#123#123</Link>
            </div>
        );
    }
}