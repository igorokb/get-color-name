exports.default = function(query) {
	const nearestColor = require('nearest-color');
	const namedColors = require('color-name-list');
	
	// nearestColor need objects {name => hex} as input
	const colors = namedColors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});

	const getNearest = nearestColor.from(colors);

	// get closest named color
	const nearest = getNearest(query)
	nearest.upperCaseName = nearest.name.toUpperCase().split(' ').join('_')
	return nearest
}
