
function dateCompare(oldValue, newValue) {

    if (oldValue === null && newValue === null)
        return 0;
    if (oldValue === null)
        return 1;
    if (newValue === null)
        return -1;

    var  oldTime = oldValue.getTime();
    var  newTime = newValue.getTime();
    if (oldTime < newTime)
        return -1;
    if (oldTime > newTime)
        return 1;

    if (isNaN(oldTime) && isNaN(newTime))
        return 0;
    if (isNaN(oldTime))
        return 1;
    if (isNaN(newTime))
        return -1;

    return 0;
}

export default dateCompare;