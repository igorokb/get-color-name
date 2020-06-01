exports.getUserFriendlyColorName = function() {
	const nearestColor = require('nearest-color');
	const namedColors = require('color-name-list');
	
	// nearestColor need objects {name => hex} as input
	const colors = namedColors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});

	const getNearest = nearestColor.from(colors);

	// get closest named color
	const query = process.argv[2]
	const nearest = getNearest(query)
	nearest.upperCaseName = nearest.name.toUpperCase().split(' ').join('_')

	if (process.argv.includes('--full')) {
		return nearest
	} else {
		return nearest.upperCaseName
	}
}
