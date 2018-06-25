const defaultState = 0;


export const example =(state = defaultState, action)=>{
    switch (action.type){
        case "add":
            return state +1
            break;
        case "subtract":
            return state-1;
            break;
        default:
            return state;
    }
};