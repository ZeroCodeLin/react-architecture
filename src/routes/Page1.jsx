import React,{ PureComponent } from "react"

class Page1 extends PureComponent{
    
    addClick=()=>{
        
    }
    subtractClick=()=>{
        
    }
    render(){
        return (
            <div style={{padding:20}} >
                <h1>计数器</h1>
                <h2>0</h2>
                <button onClick={this.addClick} style={{marginRight:10}} >add</button>
                <button onClick={this.subtractClick} >subtract</button>
            </div>
        )
    }
}

export default Page1;