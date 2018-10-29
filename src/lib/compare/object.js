import compare from './index';

/**
 * This method returns a number indicating whether obj1 comes before or after or is the same as the obj2 in sort order (ascending order)
 *  1 obj1 comes after obj2
 * -1 obj1 comes before obj2
 *  0 obj1 same as obj2
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Number}
 */
function object(obj1, obj2) {
    if (obj1 === obj2) return 0;
    if (obj1 == null) return 1;
    if (obj2 == null) return -1;


    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    const keysLength1 = keys1.length;
    const keysLength2 = keys2.length;
    if((keysLength1 === keysLength2) && (keysLength1 === 0)) return 0;
    if(keysLength1 > keysLength2) return 1;
	if(keysLength1 < keysLength2) return -1;

	let i = 0;
	let key, comparisonValue;
	for(;i < keysLength1; i++ ){
	    key = keys1[i];
		if (!obj2.hasOwnProperty(key)){
			return -1;
        }
    }

    i = 0;
	for(;i < keysLength2; i++ ){
		key = keys2[i];
		//recursive comparison of object property
		comparisonValue = compare(obj1[key], obj2[key]);
		if (comparisonValue !== 0) {
		    return comparisonValue;
		}
	}

    return 0;
};

export default object;