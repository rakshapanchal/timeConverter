const timeConvertor = (time12h) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    console.log(modifier)
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

const Array = (ArrayList) => {
    const Array1 = ArrayList.map(element => {
        return timeConvertor(element)
    });
    console.log(Array1)
    return Array1;
}

Array(['7:30 pm'])
module.exports = {
    Array,

}