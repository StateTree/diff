/**
 * This method returns a number indicating whether date1 comes before or after or is the same as the date2 in sort order (ascending order)
 *  1 date1 comes after date2
 * -1 date1 comes before date2
 *  0 date1 same as date2
 * @param {Date} date1
 * @param {Date} date2
 * @return {Number}
 */
function date(date1, date2) {

    if (date1 === null && date2 === null) return 0;
    if (date1 === null) return 1;
    if (date2 === null) return -1;

    const  time1 = date1.getTime();
    const  time2 = date2.getTime();

	if (time1 < time2) return -1;
	if (time1 > time2) return 1;

    return 0;
}

export default date;