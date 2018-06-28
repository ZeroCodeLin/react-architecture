import React,{ Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('store1')
@observer 
class Page1 extends Component{
    constructor(props){
        super(props)
        this.store = this.props.store1
    }
    
    addClick=()=>{
        this.store.add()
        
    }
    subtractClick=()=>{
        this.store.subtractClick()
    }
    componentDidMount(){
        
    }
    render(){
        return (
            <div style={{padding:20}} >
                <h1>计数器</h1>
                <h2>{this.store.count}</h2>
                <button onClick={this.addClick} style={{marginRight:10}} >add</button>
                <button onClick={this.subtractClick} >subtract</button>
            </div>
        )
    }
}

export default Page1