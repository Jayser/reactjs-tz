import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';
import routes from './Routes';

import './index.scss';

const store = createStore(reducer);

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={ store }>
        <Router history={ history } routes={ routes } />
    </Provider>,
    document.getElementById('app')
);
