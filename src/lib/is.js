/**
 * This method is to check the type
 * if obj is null or undefined will always return false
 * if Type is Object will always return true as Object is the super set
 * @param {Object} obj
 * @param {Object} Type
 * @return {Boolean}
 */
function is(obj, Type) {
    if (obj == null || Type == null)
        return false;

    // though es6 class is implemeted in all the browsers
    // we are still using es5 js most of the area,
    // so Class will come as Function Object
    // which limits us from not using obj.constructor.name === Type.name
    // hence we are using below flags
    if (obj instanceof Type)
        return true;

    if (typeof obj === 'string')
        return Type === String;
    if (typeof obj === 'number')
        return Type === Number;
    if (typeof obj === 'boolean')
        return Type === Boolean;

    return false;
}

export default is;