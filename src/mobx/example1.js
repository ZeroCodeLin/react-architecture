import {action,observable} from 'mobx'

class Store {
    @observable count = 0;
    @action add () {
      this.count = this.count + 1;
    }
    @action subtractClick () {
        this.count = this.count - 1;
    }
};

export default Store