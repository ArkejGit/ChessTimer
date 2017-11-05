import {observable, computed, action} from 'mobx';

class ChessTimerStore {
	@observable time={
		white: 0,
		black: 0
	};

	@observable timers={
		white: false,
		black: false
	};

	get timers() {
		return this.timers;
	}

	@computed get timeMinutes() {
		let white = this.time.white;
		let black = this.time.black;

		return {
			white: `${parseInt(white/60) ? parseInt(white/60) : '0'}:${white%60 < 10 ? '0' + white%60 : white%60}`,
			black: `${parseInt(black/60) ? parseInt(black/60) : '0'}:${black%60 < 10 ? '0' + black%60 : black%60}`
		}
	}

	@action setTime(time) {
		this.time.white = time;
		this.time.black = time;
	}

	@action runWhiteTimer() {
		this.timers.white = setInterval(() => {
			if (this.time.white > 0) {
				this.time.white--;
			} else {
				console.log('Black won!');
				clearInterval(this.timers.white);
			}
		}, 1000);
	}

	@action runBlackTimer() {
		this.timers.black = setInterval(() => {
			if (this.time.black > 0) {
				this.time.black--;
			} else {
				console.log('White won!');
				clearInterval(this.timers.black);
			}
		}, 1000);
	}

	@action swapTimers(player) {
		if (this.timers[player] === false) return; //prevent action if it's not player's turn
		clearInterval(this.timers[player]);
		this.timers[player] = false;
		player === 'white' ? this.runBlackTimer() : this.runWhiteTimer();
	}
}

const store = new ChessTimerStore()
export default store