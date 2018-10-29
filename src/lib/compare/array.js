import compare from './index';

/**
 * This method returns a number indicating whether array1 comes before or after or is the same as the array2 in sort order (ascending order)
 *  1 array1 comes after array2
 * -1 array1 comes before array2
 *  0 array1 same as array2
 * @param {Array} array1
 * @param {Array} array2
 * @return {Number}
 */
function array(array1, array2) {
    if (array1 === array2)
        return 0;
    if (array1 == null) // == to test both undefined and null
        return 1;
    if (array2 == null) // == to test both undefined and null
        return -1;

    let comparisonValue;
    const  array1Length = array1.length;
    const  array2Length = array2.length;
    if (array1Length < array2Length) return -1;
    if (array1Length > array2Length) return 1;

    for (let i = 0; i < array1Length; i++) {
        //recursive comparison of array elements
        comparisonValue = compare(array1[i], array2[i]);
        if (comparisonValue != 0)
            return comparisonValue;
    }
    return 0;
};

export default array;