import compare from './compare/compare';

function diff(oldState, newState){
    const comparisonValue = compare(oldState,newState);
    if (comparisonValue === -1)
        return oldState;

    if (comparisonValue === 1)
        return newState

    if (comparisonValue === 0)
        return undefined
}

export default diff;