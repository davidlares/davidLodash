/*
	Array functions = arrays
	Object functions = objects and json
	Collection functions = sequences
*/

var _ = require('lodash');

var worker = function(obj) {
	var cities = _.forEach(obj, function(o){
		if(o.population > 1.0) {
			o.size = "big";
		}
		if(o.population < 1.0 && o.population > 0.5){
			o.size = "med";
		}
		if(o.population < 0.5){
			o.size = "small";
		}
	});

	return cities;
}

module.exports = worker;