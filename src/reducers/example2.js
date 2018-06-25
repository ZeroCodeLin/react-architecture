
export const example2 = (state = [], action) => {
	switch (action.type) {
		case 'add_row':
			return [
				...state,
				{
					id: state.length + 1,
					name: action.name,
					age: action.age,
					address: action.address,
					marriage: false
				}
			]
		case 'marriage':
			return state.map((todo) => {
				if (todo.id === action.id) {
					return Object.assign({}, todo, {
						marriage: !todo.marriage
					})
				}
				return todo
			})
		default:
			return state
	}
}
