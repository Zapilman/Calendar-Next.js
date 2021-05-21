import styles from '../styles/Modal.module.scss'

export const Modal = ({active, setActive, month, day}) => {
    return (
        <div className={`${styles.modal} ${active && styles.active}`} onClick={() => setActive(false)}>
            <div className={`${styles.modal__content} ${active && styles.active}`} onClick={e => e.stopPropagation()}>
                <div className={styles.modal__content__column}>
                    <p>Month</p>
                    <input disabled={true} type="text" value={month}/>
                </div>
                <div className={styles.modal__content__column}>
                    <p>Day</p>
                    <input disabled={true} type="text" value={day}/>
                </div>
                <i className={styles.close} onClick={()=>{setActive(false)}}>X</i>
            </div>
        </div>
    )
}