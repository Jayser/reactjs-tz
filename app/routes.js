import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeScreen from './features/screens/HomeScreen';
import UsersScreen from './features/screens/UsersScreen';

export default (
    <Route path="/">
        <IndexRoute component={ HomeScreen }/>
        <Route path="/users" component={ UsersScreen } />
    </Route>
);
