/** random int
* @param {*} min : min int value include
* @param {*} max : max int value exclude
* @param operator : 0 max exclude (default) - 1  max include
**/
function getRandomInt(min, max, operator = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + operator)) + min;
}

/** random float
* @param {*} min : min value include
* @param {*} max : max value exclude
* @param operator : 0 max exclude (default) - 1  max include
**/
function getRandom(min, max, operator = 0) {
    return Math.random() * (max - min + operator) + min;
}

/** random array
* @param {*} values  array of values to pick from
**/
function getRandomArray(values) {
    return values[Math.floor(Math.random() * values.length)];
}
