/** random int
* @param {int} min : min int value include
* @param {int} max : max int value exclude
* @param {0 | 1} operator : 0 max exclude (default) / 1 max include
* @return {number} random int
**/
function getRandomInt(min, max, operator = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + operator)) + min;
}

/** random float
* @param {float} min : min value include
* @param {float} max : max value exclude
* @param operator : 0 max exclude (default) / 1 max include
* @return {number} random float
**/
function getRandom(min, max, operator = 0) {
    return Math.random() * (max - min + operator) + min;
}

/** random from an array
* @param {array} arr  array of values to pick from
* @return {any} random member of array
**/
function getRandomArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
