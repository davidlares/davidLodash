// lodash -> JS library for working with arrays, JSON on Objects
// works on the Backend and the Frontend side

var _ = require('lodash')

// filter lodash function
var worker = function filtering(args){
	return _.filter(args, {active: true});
}

module.exports = worker;

