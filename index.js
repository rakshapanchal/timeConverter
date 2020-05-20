const timeConvertor = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    if (hours < 12 && modifier.toLowerCase() == 'am') {
        hours = hours;
    } else if (hours < 12 && modifier.toLowerCase() == 'pm') {
        hours = parseInt(hours) + 12;
    } else if (hours == 12 && modifier.toLowerCase() == 'pm') {
        hours = hours;
    }
    if (minutes) {
        return `${hours}:${minutes}`;
    } else {
        return `${hours}:00`;
    }
}

const rangeValue = (RangeValue) => {
    var [time1, time2] = RangeValue.split('-');
    time1 = timeConvertor(time1);
    time2 = timeConvertor(time2.trimLeft());
    return `${time1} - ${time2}`
}

const Array = (ArrayList) => {
    var Array1;
    if (typeof ArrayList === 'object') {
        Array1 = ArrayList.map(element => {
            if (element.match(/-/g) != null) {
                return rangeValue(element)
            } else {
                return timeConvertor(element)
            }
        });
    } else {
        if (ArrayList.match(/-/g) != null) {
            Array1 = rangeValue(ArrayList)
        } else {
            Array1 = timeConvertor(ArrayList)
        }
    }
    return Array1;
}

module.exports = Array