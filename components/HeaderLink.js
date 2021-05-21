import Link from "next/link";
import styles from '../styles/HeaderLink.module.scss'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const HeaderLink = ({link, text}) => {

    const router = useRouter();
    const [isIconShow, setIsIconShow] = useState(false);

    useEffect(() => {
        setIsIconShow((router.pathname === link));
    }, [router.pathname])
    return (
        <>
            <Link href={link}>
                <li className={styles.link_item}>
                    <a>{text}</a>
                    {(isIconShow) && <span>icon</span>}
                </li>
            </Link>
        </>
    )
}