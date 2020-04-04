import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import ModuleContainer from './components/Main';
import rootReducer from './reducers';
import { fetchPosts } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <ModuleContainer />
    </Provider>, document.getElementById('root')
);