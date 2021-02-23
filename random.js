/** random int
* @param {*} min : min int value include
* @param {*} max : max int value exclude
* @param operator : 0 max exclude (default) / 1 max include
* @return {number} random int
**/
function getRandomInt(min, max, operator = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + operator)) + min;
}

/** random float
* @param {*} min : min value include
* @param {*} max : max value exclude
* @param operator : 0 max exclude (default) / 1 max include
* @return {number} random float
**/
function getRandom(min, max, operator = 0) {
    return Math.random() * (max - min + operator) + min;
}

/** random from an array
* @param {*} arr  array of values to pick from
* @return {any} random member of array
**/
function getRandomArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
