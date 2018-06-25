let initState = {
    dataSource: []
}

//定义一个叫做example3的reducer，更新state。
export function example3(state = initState, action) {
    switch (action.type) {
        case 'save':
            return {
                ...state,
                dataSource: action.payload
            }

        default:
            return state;
    }
}



