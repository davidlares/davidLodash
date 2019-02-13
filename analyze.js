var _ = require('lodash');

var worker = function(arg){

	let average;
    let underperform;
    let overperform;
    
    // Sort
    arg = _.sortBy(arg, "income");

	// Sum of all incomes
    average = _.reduce(arg, function(sum, num) {
        return sum + num.income;
    }, 0);
    
    // calculate average
    average = average / arg.length;
    
    // filter underperformer
    underperform = _.filter(arg, function (num) {
        return num.income <= average;
    });
    
    // filter overperformer
    overperform = _.filter(arg, function (num) {
        return num.income > average;
    });

    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    };

}

module.exports = worker;