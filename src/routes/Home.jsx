import React, { PureComponent } from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'

import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'

export default class Home extends PureComponent{

    render(){
        return (
            <div>
                <div style={styles.container}>
                    <Link to="/page1">Page1</Link>
                    <Link to="/page2">Page2</Link>
                    <Link to="/page3">Page3</Link>
                </div>
                <div style={styles.container}>
                    <Switch>
                        <Route  path="/page1" component={Page1}/>
                        <Route  path="/page2" component={Page2}/>
                        <Route  path="/page3" component={Page3}/>

                        <Redirect exact from="/" to='/page1' />
                    </Switch>
                </div>
                
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