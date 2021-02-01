/** random int
    min : include
    max : exclude
    operator : 0 max exclude || 1  max include
**/
function getRandomInt(min, max, operator = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + operator)) + min;
}

/** random float
    min : include
    max : exclude
    operator : 0 max exclude - 1  max include
**/
function getRandom(min, max, operator = 0) {
    return Math.random() * (max - min + operator) + min;
}

/** random array
    array : array
**/
function getRandomArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/** lerp
    start - target - step
**/
function lerp(start, target, step){
    return (1-step)*start + step*target;
}

/** mapScale
    n : value on scale1
    start1 : origine on scale 1 - end1 : end of scale1
    start2 : origine on scale 2 - end2 : end of scale2
**/
function mapScale(n, start1, end1, start2, end2){
    return (n - start1) / (end1 - start1) * (end2 - start2) + start2;
}