import stringCompare from './stringCompare'
import numberCompare from './numberCompare'
import dateCompare from './dateCompare'
import arrayCompare from './arrayCompare'
import objectCompare from './objectCompare'
import is from './../is'

function compare(oldObj, newObj)
{
    if (oldObj === newObj)
        return 0;
    if (oldObj == null)
        return 1;
    if (newObj == null)
        return -1;

    const  oldObjType = typeof(oldObj);
    const  newObjType = typeof(newObj);

    if (oldObjType !== newObjType)
        return stringCompare(oldObjType, newObjType);

    if (oldObjType === 'boolean')
        return numberCompare(Number(oldObj), Number(newObj));
    if (oldObjType === 'number')
        return numberCompare(oldObj, newObj);
    if (oldObjType === 'string')
        return stringCompare(oldObj, newObj);

    if (oldObjType !== 'object')
        return 1;

    if (is(oldObj, Date))
        return dateCompare(oldObj, newObj);
    if (is(oldObj, Array))
        return arrayCompare(oldObj, newObj,compare);
    if (is(oldObj, Object))
        return objectCompare(oldObj, newObj, compare);

    return 0;
};

export default compare;