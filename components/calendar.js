import styles from '../styles/Calender.module.scss'
import {useEffect, useState} from "react";
import {CalendarHeader} from "./CalendarHeader";
import {useDispatch} from "react-redux";
import {setDate} from "../redux/calendarReducer";
import {buildCalendar, dayStyles} from "../utilities/calendarUtilities";

export const Calendar = ({value, onChange, setActive}) => {

    const [calendar, setCalendar] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);


    return (
        <div className={styles.calendar}>

            <CalendarHeader value={value} onChange={onChange}/>

            <div className={styles.body}>
                <div className={styles.daysWrapper}>
                    {calendar.map((week, wi) => (
                        <div className={styles.daysWrapper_row} key={wi}>
                            {week.map((day, di) => (
                                <div
                                    key={di}
                                    className={styles.day}
                                    onClick={() => {
                                        dispatch(setDate(day.format('MMMM')
                                            , day.format('D')
                                            , day.day()))
                                        setActive(true);
                                        onChange(day);
                                    }}>
                                    <div className={dayStyles(day, value)}>
                                        {`${(day.format("D").toString().length === 1)
                                            ? '0' 
                                            : ''}${day.format("D").toString()}`}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className={styles.dayNames}>
                    {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
                        <span>{d}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}
