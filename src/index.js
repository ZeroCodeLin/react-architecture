import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'

const reducer = combineReducers(reducers)

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store={store} >
        <Router />
    </Provider>,
    document.getElementById('root')
)