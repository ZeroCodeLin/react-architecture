import {action,observable} from 'mobx'

class Example2 {
    @observable dataSource = []

    @action add (data) {
        const params = {
            ...data,
            id: this.dataSource.length +1
        }
        this.dataSource.push(params)
    }
    @action changeFlag (id) {
        this.dataSource = this.dataSource.map(data => {
            if (data.id === id) {
                return Object.assign({}, data, {
                    marriage: !data.marriage
                })
            }
            return data
        })
    }
}

export default Example2