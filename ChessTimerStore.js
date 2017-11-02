import {observable} from 'mobx';

class ChessTimerStore {
	@observable time=10;

    // constructor() {
    //     mobx.autorun(() => console.log(this.report));
    // }

    get getTime() {
        return this.time;
    }

	addTime() {
		this.time += 1;
	}
}

const store = new ChessTimerStore()
export default store