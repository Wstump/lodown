'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
module.exports.identity = _.identity;
module.exports.typeOf = _.typeOf;
module.exports.first = _.first;
module.exports.last = _.last;
module.exports.indexOf = _.indexOf;
module.exports.contains = _.contains;
module.exports.each = _.each;
module.exports.unique = _.unique;
module.exports.filter = _.filter;
module.exports.reject = _.reject;
module.exports.partition = _.partition;
module.exports.map = _.map;
module.exports.pluck = _.pluck;
module.exports.every = _.every;
module.exports.some = _.some;
module.exports.reduce = _.reduce;
module.exports.extend = _.extend;
