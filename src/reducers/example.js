const defaultState = 0

export const example = (state = defaultState, action) => {
    switch (action.type) {
    case 'add':
        return state + 1
    case 'subtract':
        return state - 1
    default:
        return state
    }
}