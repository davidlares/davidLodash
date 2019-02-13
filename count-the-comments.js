var _ = require('lodash');

var worker = function(arr){
	var sorted = []
	// first way
	// return ._chain(arr)
	// 	.groupBy(arr,'username')
	// 	.map(function(el){
	// 		var comment_count = ._size(el);
	// 		sorted.username = el;
	// 		sorted.comment_count = comment_count;
	// 	});

	// stepped way

	var users = _.groupBy(arr,'username');
	_.forEach(users, function(comments, user){
		sorted.push({username: user, comment_count: _.size(comments)})
	});
	return _.sortBy(sorted, function (value) {
        return 0 - value.comment_count;
    });
}

module.exports = worker;