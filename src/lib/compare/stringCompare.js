//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
function stringCompare(oldValue, newValue, isCaseSensitive) {
    isCaseSensitive = typeof isCaseSensitive !== 'undefined' ? isCaseSensitive : false;

    if (oldValue == null && newValue == null)
        return 0;
    if (oldValue == null)
        return 1;
    if (newValue == null)
        return -1;

    if (isCaseSensitive) {
        oldValue = String(oldValue).toLocaleLowerCase();
        newValue = String(newValue).toLocaleLowerCase();
    }

    let result = String(oldValue).localeCompare(newValue);
    if (result < -1)
        result = -1;
    else if (result > 1)
        result = 1;

    return result;
}

export default stringCompare;

