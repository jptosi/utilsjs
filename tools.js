/** lerp
* Return a value between start and target based on current step in range [0...1]
* @param {*} start min value
* @param {*} target max value
* @param {*} step in range [0...1]
* @return {number}
*/
function lerp(start, target, step){
    if (step < 0) return start;
    if (step > 1) return target;
    return (1-step)*start + step * target;
}

/** lerpArray
* Return a value from an array of values based on current step in range [0...1]
* @param {*} arr array of values to pick from
* @param {*} step in range [0...1]
* @return {any} member of array
*/
function lerpArray(arr, step) {
    if (step < 0) return arr[0];
    if (step > 1) return arr[arr.length - 1];
    return values[Math.floor((values.length - 1) * step)];
}

/** mapRange
* return a mapped value from a range to another
* @param {*} n : value on scale1
* @param {*} start1 : origine on range1
* @param {*} end1 : end of range1
* @param {*} start2 : origine on range2
* @param {*} end2 : end of range2
* @return {number}
**/
function mapRange(n, start1, end1, start2, end2){
    return (n - start1) / (end1 - start1) * (end2 - start2) + start2;
}