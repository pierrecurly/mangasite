import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui/dist/semantic.min.css';

ReactDOM.render(
    <Router>
         <Provider store={store}>
            <App />
         </Provider>
    </Router>,
    document.getElementById('root'),
);