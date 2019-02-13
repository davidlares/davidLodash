var _ = require('lodash')

var worker = function(args) {
    
    var group = _.groupBy(args, function (o) {
        return o.article;
    });
    
    var sorted = [];

    _.forEach(group, function (orders, name) {
    
        sorted.push({
        	article: parseInt(name), 
        	total_orders: _.reduce(orders, function (sum, order) {
            return sum + order.quantity;
        }, 0)});
    });
    
    return _.sortBy(sorted, 'total_orders').reverse();
};

module.exports = worker;

/*
  * `accumulator` is the rolling tally-keeping variable.
  * `value` is the current item's value.
  * `key` is the key of the current item in the Object.
*/

// function(result, num, key)