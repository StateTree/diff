
function numberCompare(oldValue, newValue) {

    if (isNaN(oldValue) && isNaN(newValue))
        return 0;
    if (isNaN(oldValue))
        return 1;
    if (isNaN(newValue))
        return -1;

    if (oldValue < newValue)
        return -1;
    if (oldValue > newValue)
        return 1;
    return 0;
}

export default numberCompare;