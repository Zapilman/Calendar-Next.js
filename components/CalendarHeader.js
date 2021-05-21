import styles from '../styles/CalendarHeader.module.scss'

export const CalendarHeader = ({value, onChange}) => {
    return (
        <div className={styles.header}>
            <i className={styles.previous} onClick={() => onChange(value.clone().subtract(1, "month"))}> </i>
            <p>{value.format("MMMM")} {value.format("YYYY")}</p>
            <i className={styles.next} onClick={() => onChange(value.clone().add(1, "month"))}> </i>
        </div>
    );
}