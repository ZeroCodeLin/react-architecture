import React, { Component } from 'react'
import {inject, observer } from 'mobx-react';

@inject('store3')
@observer
class Page3 extends Component{
    constructor(props) {
		super(props);
		this.store = this.props.store3;
	}
    state={
        data: {}        
    }
    click=()=>{
        this.store.fetchList()
    }
    render(){
        
        return (
            <div>
                <h1>Hello Page3!</h1>
                <input type="button" value="异步MobX" onClick={this.click} />
                <div style={{width:300}}>
                    <p>Page3的异步获取数据为：{JSON.stringify(this.store.dataSource)}</p>
                </div>
            </div>
        )
    }
}

export default Page3;