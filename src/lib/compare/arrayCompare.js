import compare from './compare';

function arrayCompare(oldObj, newObj)
{
    if (oldObj === newObj)
        return 0;
    if (oldObj == null)
        return 1;
    if (newObj == null)
        return -1;

    let comparisonValue;
    var  oldObjLength = oldObj.length;
    var  newObjLength = newObj.length;
    if (oldObjLength < newObjLength)
        return -1;
    if (oldObjLength > newObjLength)
        return 1;

    for (var  i = 0; i < oldObjLength; i++) {
        //recursive comparison of array elements
        comparisonValue = compare(oldObj[i], newObj[i]);
        if (comparisonValue != 0)
            return comparisonValue;
    }
    return 0;
};

export default arrayCompare;