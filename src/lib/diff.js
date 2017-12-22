import compare from './compare/compare';

function diff(oldState, newState){
    const comparisonValue = compare(oldState,newState);
    if (comparisonValue === 0){
        return undefined
    }
    else{
        return newState;
    }
}

export default diff;