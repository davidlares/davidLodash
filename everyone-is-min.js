// lodash solution for loops
// _.every() and some() -> as soon it finds a pasing value

var _ = require('lodash');

var worker = function(data){
	var sorted = {hot: [], warm: []}
	// scope problems
	var hot;
	var warm; 
	// var cities = _.forEach(data, function(c, k){
	// making it anon
	_.forEach(data, function(c, k){
		// all temp above 19
		hot = _.every(c, function(d){
			return d > 19;
		}); 

		// at least one = warm
		warm = _.some(c, function(d){
			return d > 19;
		}); 
			
		// validating and adding
		if(hot){
			sorted.hot.push(k);
		}
		if(!hot && warm){
			sorted.warm.push(k);
		}
	});
	
	return sorted;
}


module.exports = worker;