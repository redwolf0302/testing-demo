import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import 'styles/main.css';
import User from "./pages/User";
import Chat from "./pages/IM/Chat";
import Home from "./pages/Home";

render(
    <HashRouter>
        <div className='container'>
            <Route exact path='/' component={Home}/>
            <Route path='/user/:userId' component={User}/>
            <Route path='/im/chat/:userId/:friendId' component={Chat}/>
        </div>
    </HashRouter>,
    document.getElementById('app'));