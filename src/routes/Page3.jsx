import React, {PureComponent} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { getTest } from '../actions/example3'

class Page3 extends PureComponent{
    state={
        data: {}        
    }
    click=()=>{
       console.log(this.props)
       this.props.dispatch.getTest()
    }
    render(){
        console.log(this.props.dataSource)
        return (
            <div>
                <h1>Hello Page3!</h1>
                <input type="button" value="获取mcok" onClick={this.click} />
                <div style={{width:300}}>
                    <p>Page3的mock模拟数据为：{JSON.stringify(this.props.dataSource)}</p>
                </div>
            </div>
        )
    }
}

function select(state) {
    return {
        dataSource: state['example3'].dataSource
    }
}

const mapDispatchToProps = (
    dispatch,
    ownProps
  ) => {
    return {
        dispatch : bindActionCreators({ getTest }, dispatch)
    }
  }

export default connect(select, mapDispatchToProps)(Page3);