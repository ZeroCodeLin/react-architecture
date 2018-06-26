import React, {PureComponent} from 'react'

class Page3 extends PureComponent{
    state={
        data: {}        
    }
    click=()=>{
       
    }
    render(){
        console.log(this.props.dataSource)
        return (
            <div>
                <h1>Hello Page3!</h1>
                <input type="button" value="获取mcok" onClick={this.click} />
                <div style={{width:300}}>
                    <p>Page3的mock模拟数据为：</p>
                </div>
            </div>
        )
    }
}

export default Page3;