#!/usr/bin/env node

const getUserFriendlyColorName = require('../index').default

const query = process.argv[2]

if (process.argv.includes('--full')) {
	console.log(getUserFriendlyColorName(query))
} else {
	console.log(getUserFriendlyColorName(query).upperCaseName)
}
