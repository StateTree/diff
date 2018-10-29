/**
 * This method returns a number indicating whether num1 comes before or after or is the same as the num2 in sort order (ascending order)
 *  1 num1 comes after num2
 * -1 num1 comes before num2
 *  0 num1 same as mum2
 * @param {Number} num1
 * @param {Number} num2
 * @return {Number}
 */
function number(num1, num2) {

    if (isNaN(num1) && isNaN(num2))
        return 0;
    if (isNaN(num1))
        return 1;
    if (isNaN(num2))
        return -1;

    if (num1 < num2)
        return -1;
    if (num1 > num2)
        return 1;
    return 0;
}

export default number;