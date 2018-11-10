import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools.js';
import {getCountries} from './actions/actions-countries.js';

store.dispatch(getCountries());

render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizacja projektu</h1>
            <DevTools />
        </div>
    </Provider>,
    document.getElementById('root')
);