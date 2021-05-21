

export const getMonth = (state) => {
    return state.calendar.selectedMonth;
}
export const getDay = (state) => {
    return `${state.calendar.selectedDay}th ${state.calendar.selectedWeek}`;
}