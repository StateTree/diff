/**
 * This method returns a number indicating whether str1 comes before or after or is the same as the obj2 in sort order (ascending order)
 *  1 str1 comes after str2
 * -1 str1 comes before str2
 *  0 str1 same as str2
 *  Its a wrapper to localeCompare function (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
 * @param {Object} str1
 * @param {Object} str2
 * @param {Boolean} isCaseSensitive
 * @return {Number}
 */
function string(str1, str2, isCaseSensitive = true) {
    // == used to consider both null and undefined
    if (str1 == null && str2 == null) return 0;
    if (str1 == null) return 1;
    if (str2 == null) return -1;

    if (!isCaseSensitive) {
        str1 = String(str1).toLocaleLowerCase();
        str2 = String(str2).toLocaleLowerCase();
    }

    // localeCompare will return positive or negative or zero based on the browser
    let result = String(str1).localeCompare(str2);
    if (result < -1) // if less than -1 set to -1
        result = -1;
    else if (result > 1) // if greater than 1 set to 1
        result = 1;

    return result;
}

export default string;

