function is(obj, Type) {
    if (obj == null || obj == null)
        return false;
    if (obj instanceof Type)
        return true;
    if (Type === Object)
        return true;

    if (typeof(obj) === 'string')
        return Type === String;
    if (typeof(obj) === 'number')
        return Type === Number;
    if (typeof(obj) === 'boolean')
        return Type === Boolean;
    if (Type === Array)
        return Array.isArray(obj);

    return false;
}

export default is;