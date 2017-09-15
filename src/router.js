
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import ConditionalRendering from './components/ConditionalRendering/ConditionalRendering.js';
import Themes from './components/Themes/Themes.js';
import Modals from './components/Modals/Modals.js';
import Events from './components/Events/Events.js';
import Charts from './components/Charts/Charts.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ ConditionalRendering } path='/conditional-rendering' exact />
        <Route component={ Themes } path='/themes' exact />
        <Route component={ Modals } path='/modals' exact />
        <Route component={ Events } path='/events' exact /> 
        <Route component={ Charts } path='/charts' exact /> 

    </Switch>
)
