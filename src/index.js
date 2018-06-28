import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import {Provider} from 'mobx-react'

import Example1 from './mobx/example1'
import Example2 from './mobx/example2'
import Example3 from './mobx/example3'
const store1 = new Example1()
const store2 = new Example2()
const store3 = new Example3()
const store = {
    store1,
    store2,
    store3
}
ReactDOM.render(
    <Provider {...store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)