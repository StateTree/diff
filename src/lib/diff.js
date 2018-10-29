import compare from './compare';

/**
 * This method returns compares to find both are same if not returns the new value
 * @param {Object} oldValue
 * @param {Object} newValue
 * @return {Object}
 */
function diff(oldValue, newValue){
	const comparisonValue =  compare(oldValue, newValue);

	if(comparisonValue === 0){
		newValue = undefined;
	}

    return newValue;
}

export default diff;