import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";

const initialState = {
    users: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'start':
            return {
                ...state,
                loading: true
            }
        case 'load':
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case 'delete':
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload)
            }

        default: return state;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <div className="main">
    <App />
      </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
