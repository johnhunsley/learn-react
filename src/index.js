import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './main/App';
import PrimaryLayout from './main/layouts/PrimaryLayout';
//import './main/styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <PrimaryLayout>
        <App />
    </PrimaryLayout>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
