import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from "react-redux";
import store from "./redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="main">
                <App/>
            </div>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
