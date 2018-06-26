import {action,observable} from 'mobx'
import request from '../utils/request'

class Example3 {
    @observable dataSource = [];

    @action async fetchList() {
        let response = await request(`api/page3`)
        this.dataSource = response
    }
};

export default Example3