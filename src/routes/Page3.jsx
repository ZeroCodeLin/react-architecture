import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getTest } from '../actions/example3'

@connect(
    ({ example3 }) => ({
        dataSource: example3.dataSource,
    }),
    dispatch=> bindActionCreators({ getTest }, dispatch)
)
class Page3 extends PureComponent{
    state={
        data: {}        
    }
    click=()=>{
        this.props.getTest()
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

Page3.propTypes = {
    dataSource: PropTypes.object,
    getTest: PropTypes.func
}

export default Page3