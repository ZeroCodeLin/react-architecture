import React, { PureComponent } from "react"
import { connect } from 'react-redux';


function TabelDemo(props) {
    return (
        <div style={{ padding: 20 }} >
            <button onClick={props.onClick} style={{ marginBottom: 10 }} >add</button>
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>住址</th>
                        <th>婚否</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       props.dataSource.map(item =>{
                           return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>{item.marriage?<span style={{color:'green'}}>true</span>:<span style={{color:'red'}}>false</span>}</td>
                                    <td><button onClick={() => props.update(item.id)} >修改状态</button></td>
                                </tr>
                           )
                       })
                   }
                </tbody>
            </table>
        </div>
    )
}

function select(state) {
    console.log("state", state)
    return {
        dataSource: state['example2']
    }
}
const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch({
                type: 'add_row',
                name: randomName(),
                age: Math.floor(Math.random() * 100 + 1),
                address: randomAddress()
            });
        },
        update: (id) => {
            dispatch({
                type: 'marriage',
                id: id
            })
        }
    };
}
const firstNameArr = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈"]
const lastNameArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
const randomName = () => {
    const firstName = firstNameArr[Math.floor(Math.random() * 10)]
    const lastName = lastNameArr[Math.floor(Math.random() * 10)]
    return `${firstName}${lastName}`
}

const placeArr = ["滨江", "上城", "西湖", "下城", "余杭", "江干", "萧山", "富阳", "临平", "千岛湖"]
const randomAddress = () => {
    const name = placeArr[Math.floor(Math.random() * 10)]
    return `浙江省杭州市${name}`
}
export default connect(select, mapDispatchToProps)(TabelDemo);