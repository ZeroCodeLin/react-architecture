import React, {PureComponent} from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'

export default class Home extends PureComponent{

    render(){
        return (
            <div style={styles.container} >
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/">首页</Link></li>
                </ul>
                <Switch>
                    <Route  path="/page1" component={Page1}/>
                    <Route  path="/page2" component={Page2}/>
                    <Route  path="/page3" component={Page3}/>

                    <Redirect exact from="/" to='/page1' />
                </Switch>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center'
    }
}