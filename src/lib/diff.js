import compare from './compare/compare';

function diff(oldValue, newValue){
	const comparisonValue =  compare(oldValue, newValue);

	if(comparisonValue === 0){
		newValue = undefined;
	}

    return {
		prev: oldValue,
		current: newValue
	};
}

export default diff;