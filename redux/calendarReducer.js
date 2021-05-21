const SET_DATE = 'calendarReducer/SET_DATE'

export const setDate = (month, day, numberOfDay) => ({type: SET_DATE, month, day, numberOfDay})


const initialState = {
    weeks: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    selectedWeek: null,
    selectedDay: null,
    selectedMonth: null
}

const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE: {
            return ({
                ...state,
                selectedDay: action.day,
                selectedMonth: action.month,
                selectedWeek: state.weeks[action.numberOfDay]
            })
        }
        default: {
            return state;
        }
    }
}

export default calendarReducer;