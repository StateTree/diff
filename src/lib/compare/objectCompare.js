import compare from './compare';

function objectCompare(oldObj, newObj)
{
    if (oldObj === newObj)
        return 0;
    if (oldObj == null)
        return 1;
    if (newObj == null)
        return -1;


    let prop;
    for (prop in oldObj)
    {
        if (!newObj.hasOwnProperty(prop))
            return -1;
    }

    let comparisonValue;
    for (prop in newObj)
    {
        if (!oldObj.hasOwnProperty(prop))
            return 1;
        //recursive comparison of object property
        comparisonValue = compare(oldObj[prop], newObj[prop]);
        if (comparisonValue !== 0)
            return comparisonValue;
    }
    return 0;
};

export default objectCompare;