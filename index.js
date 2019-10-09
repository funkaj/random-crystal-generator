let crystals = require('./crystals');

module.exports = str => {
	let random = getRandom(str.crystals.length);
	str.crystals.map((x, i) => {
		if (random === i) {
			console.log(x.name);
		}
	});
};

getRandom = max => {
	return (random = Math.floor(Math.random() * Math.floor(max)));
};
