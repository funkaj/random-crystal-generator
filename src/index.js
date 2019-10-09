import crystals from './crystals';

class Crystal {
	constructor() {
		this.name = this.crystal();
	}

	crystal() {
		let random = (random = Math.floor(
			Math.random() * Math.floor(crystals['crystals'].length)
		));
		let winner;
		crystals['crystals'].map((crystal, i) => {
			if (random === i) {
				winner = crystal.name;
			} else return 'err';
		});
		return winner;
	}
}

export default Crystal;
