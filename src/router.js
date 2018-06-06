import React from 'react'
import {BrowserRouter as Router,Route,Link,HashRouter} from 'react-router-dom'

import Home from './routes/Home.jsx'

const RouterConfig = (props)=>{

    return (
        <HashRouter>
            <Route  path="/" component={Home}/>
        </HashRouter>
    )
}
export default RouterConfig