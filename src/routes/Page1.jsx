import React,{ PureComponent } from "react"
import { connect } from 'react-redux';

@connect(({ example }) => ({
    num: example,
}))
class Page1 extends PureComponent{
    
    addClick=()=>{
        this.props.dispatch({type:'add'})      
    }
    subtractClick=()=>{
        this.props.dispatch({type:'subtract'})
    }
    render(){
        return (
            <div style={{padding:20}} >
                <h1>计数器</h1>
                <h2>{this.props.num}</h2>
                <button onClick={this.addClick} style={{marginRight:10}} >add</button>
                <button onClick={this.subtractClick} >subtract</button>
            </div>
        )
    }
}

export default Page1;