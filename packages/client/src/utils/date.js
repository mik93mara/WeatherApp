const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export const addZero = (time) => {
    if (time < 10) {
        time = "0" + time;
    }
    return time;
};

export const getDate = (dt = "") => {
    if (dt) {
        const d = new Date(dt * 1000);
        return d;
    }
    return dt;
};

export const getDayOfWeek = (dt = "") => {
    if (dt) {
        const d = getDate(dt);
        const dayIndex = d.getDay();

        return days[dayIndex];
    }
    return "";
};

export const getHoursOfDay = (dt = "") => {
    if (dt) {
        const d = getDate(dt);
        const hours = d.getHours();

        return addZero(hours);
    }
    return "";
};

export const getMinutesOfDay = (dt = "") => {
    if (dt) {
        const d = getDate(dt);
        const minutes = d.getMinutes();

        return addZero(minutes);
    }
    return "";
};

export const getDayTime = (dt = "") => {
    if (dt) {
        const day = getDayOfWeek(dt);
        const hour = getHoursOfDay(dt);
        const minute = getMinutesOfDay(dt);
        return `${day}, ${hour}:${minute}`;
    }
    return "";
};

export const getMonthDay = (dt = "") => {
    if (dt) {
        const d = getDate(dt);
        const month = d.getMonth();
        const day = d.getDate();
        return `${months[month]}, ${day}`;
    }
    return "";
};
