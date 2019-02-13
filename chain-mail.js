var _ = require('lodash');

var worker = function(arr){
	return _.chain(arr)
	.sortBy([arr => arr.toLowerCase()],['desc'])
	.map(function(chr){
		return `${chr}chained`.toUpperCase();
	});
}

module.exports = worker;