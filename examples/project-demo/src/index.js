import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import 'styles/main.css';
import User from "./pages/User";
import Chat from "./pages/IM/Chat";
import Friends from "./pages/IM/Friends";
import Home from "./pages/Home";

render(
    <HashRouter>
        <div className='container'>
            <Route exact path='/' component={Home}/>
            <Route path='/user/:userId' component={User}/>
            <Route path='/im/chat/:userId/:friendId' component={Chat}/>
            <Route path='/im/friends/:userId' component={Friends}/>
            {/*<Route render={({location}) => <div><h3>找不到路啦。<code>{location.pathname}</code></h3></div>}/>*/}
        </div>
    </HashRouter>,
    document.getElementById('app'));