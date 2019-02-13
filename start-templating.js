var _ = require('lodash');

var worker = function(user){
	
	let my_template = "Hello <%= name %> (logins: <%= login.length %>)";
   	return _.template(my_template)(user);

}

module.exports = worker;