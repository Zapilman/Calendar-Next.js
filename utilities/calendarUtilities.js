import styles from "../styles/Calender.module.scss";

export function buildCalendar(date) {
    const a = [];

    const startDay = date.clone().startOf("month").startOf("week");
    const endDay = date.clone().endOf("month").endOf("week");

    const _date = startDay.clone().subtract(1, "day");

    while (_date.isBefore(endDay, "day")) {
        a.push(
            Array(7)
                .fill(0)
                .map(() => _date.add(1, "day").clone())
        );
    }
    return a;
}


export function dayStyles(day, value) {
    if (day.format('MMMM') !== value.format("MMMM")) return styles.before;
    if (value.isSame(day, "day")) return styles.selected;
    return "";
}