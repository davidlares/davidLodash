var _ = require('lodash');

var sorting = function (arr){
	return _.sortBy(arr,function(a){
		return a.quantity; 
	}).reverse();
}

// sortBy reverse strategy

module.exports = sorting;