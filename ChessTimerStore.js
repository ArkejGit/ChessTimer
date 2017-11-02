import {observable, computed, action} from 'mobx';

class ChessTimerStore {
	@observable time={
		white: 0,
		black: 0
	};

	@computed get timeMinutes() {
		let white = this.time.white;
		let black = this.time.black;

		return {
			white: `${parseInt(white/60) ? parseInt(white/60) : '0'}:${white%60 < 10 ? white%60 + '0' : white%60}`,
			black: `${parseInt(black/60) ? parseInt(black/60) : '0'}:${black%60 < 10 ? black%60 + '0' : black%60}`
		}
	}

	@action setTime(time) {
		this.time.white = time;
		this.time.black = time;
	}
}

const store = new ChessTimerStore()
export default store