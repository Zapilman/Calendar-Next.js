import styles from '../styles/Home.module.scss'
import {Header} from "../components/Header";
import {Calendar} from "../components/calendar";
import {useState} from "react";
import moment from "moment";
import {Modal} from "../components/Modal";
import {useSelector} from "react-redux";
import {getDay, getMonth} from "../utilities/selectors";

export default function Home() {

    const [selectedDate, setSelectedDate] = useState(moment());
    const [active, setActive] = useState(false)

    const month = useSelector(getMonth);
    const day = useSelector(getDay);

    return (
        <div className={styles.wrapper}>
            <Header>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <h1 className={styles.info_title}>
                            Choose the day for the meeting
                        </h1>
                        <p className={styles.info_text}>
                            We encourage you to book your appointment online.<br/> This will save you time.
                        </p>
                    </div>
                    <Calendar value={selectedDate}
                              onChange={setSelectedDate}
                              setActive={setActive}/>
                </div>
            </Header>
            <Modal active={active} setActive={setActive} month={month} day={day}/>
        </div>
    )
}
