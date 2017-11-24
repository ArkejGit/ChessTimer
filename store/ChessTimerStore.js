import {observable, computed, action} from 'mobx';

class ChessTimerStore {

	// game -------------------------
	@observable gameInProgress = false;

	get gameInProgress() {
		return this.gameInProgress;
	}

	@action clearGame() {
		this.setTime(0);
		this.clearTimers();
		this.gameInProgress = false;
	}

	@observable winner = null;

	@action setWinner(winner) {
		this.winner = winner;
	}

	get winner() {
		return this.winner;
	}

	// time -----------------------
	@observable time={
		white: 0,
		black: 0
	};

	@action setTime(time) {
		this.time.white = time;
		this.time.black = time;
	}

	@computed get timeMinutes() {
		let white = this.time.white;
		let black = this.time.black;

		return {
			white: `${parseInt(white/60) ? parseInt(white/60) : '0'}:${white%60 < 10 ? '0' + white%60 : white%60}`,
			black: `${parseInt(black/60) ? parseInt(black/60) : '0'}:${black%60 < 10 ? '0' + black%60 : black%60}`
		}
	}

	// timers ------------------------------
	@observable timers={
		white: false,
		black: false
	};

	get timers() {
		return this.timers;
	}

	@action clearTimers() {
		if (this.timers.white) {
			clearInterval(this.timers.white);
			this.timers.white = false;
		} else if (this.timers.black) {
			clearInterval(this.timers.black);
			this.timers.black = false;
		}

	}	

	@action runWhiteTimer() {
		this.gameInProgress = true;
		this.timers.white = setInterval(() => {
			if (this.time.white > 0) {
				this.time.white--;
			} else {
				console.log('Black won!');
				clearInterval(this.timers.white);
				this.gameInProgress = false;
				this.winner = 'black';
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
				this.gameInProgress = false;
				this.winner = 'white';
			}
		}, 1000);
	}

	@action swapTimers(player) {
		if (this.timers[player] === false) return; //prevent action if it's not player's turn
		clearInterval(this.timers[player]);
		this.timers[player] = false;
		player === 'white' ? this.runBlackTimer() : this.runWhiteTimer();
	}

	// modal ------------------------------
	@observable modalVisible = false;

	get modalVisible() {
		return this.modalVisible;
	}

	@action showModal() {
		this.modalVisible = true;
	}

	@action hideModal() {
		this.modalVisible = false;
	}
}

const store = new ChessTimerStore()
export default store