import React from 'react'
import {Route,HashRouter} from 'react-router-dom'

import Home from './routes/Home.jsx'

const RouterConfig = ()=>{

    return (
        <HashRouter>
            <Route  path="/" component={Home}/>
        </HashRouter>
    )
}
export default RouterConfig