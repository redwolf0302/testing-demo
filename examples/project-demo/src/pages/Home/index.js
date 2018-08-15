import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className='home-container'>
                <img src={require('images/logo.png')} className='home-logo'/>
                <Link className='btn clear-btn home-enter-btn' to={'/user/1'}>点击进入>>></Link>
            </div>
        );
    }
}