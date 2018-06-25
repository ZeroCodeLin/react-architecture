import React,{ PureComponent } from "react"
import { connect } from 'react-redux';

class Demo extends PureComponent{
    
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

function select(state) {
    console.log(state)
    return {
        num: state['example']
    }
}
export default connect(select)(Demo);