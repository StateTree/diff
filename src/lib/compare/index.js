import stringCompare from './string'
import numberCompare from './number'
import dateCompare from './date'
import arrayCompare from './array'
import objectCompare from './object'
import is from './../is'

/**
 * This method returns a number indicating whether obj1 comes before or after or is the same as the obj2 in sort order (ascending order)
 *  1 obj1 comes after obj2
 * -1 obj1 comes before obj2
 *  0 obj1 same as obj2
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Number}
 */
function compare(obj1, obj2) {
    if (obj1 === obj2)
        return 0;
    if (obj1 == null)
        return 1;
    if (obj2 == null)
        return -1;

    const  obj1Type = typeof obj1;
    const  obj2Type = typeof obj2;

    // if both the objects are of different types, string comparison is used
    if (obj1Type !== obj2Type) return stringCompare(obj1Type, obj2Type);

    if (obj1Type === 'boolean') return numberCompare(Number(obj1), Number(obj2));
    if (obj1Type === 'number') return numberCompare(obj1, obj2);
    if (obj1Type === 'string') return stringCompare(obj1, obj2);


    if (is(obj1, Date))return dateCompare(obj1, obj2);
    if (is(obj1, Array)) return arrayCompare(obj1, obj2);
    if (is(obj1, Object)) return objectCompare(obj1, obj2);

    return 0;
};

export default compare;