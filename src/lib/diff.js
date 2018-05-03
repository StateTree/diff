import compare from './compare/compare';

// If there is no change returns undefined
// if there is a change returns the latest value
function diff(comparedValue, value){
	const comparisonValue =  compare(comparedValue, value);

	if(comparisonValue === 0){
		value = undefined;
	}

    return value;
}

export default diff;