import React, { useEffect ,useRef} from 'react'
import styles from "./AboutOverview.module.scss"
import AOS from "aos"
import 'aos/dist/aos.css'
export default function AboutOverview() {
    const titleRef = useRef(null);

    const areas = {
        "rooms": 31,
        "suits": 6,
        "halls": 2
    }
    const data = {
        "title": "",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    useEffect(() => {
      AOS.init({duration:2000,delay:"100"})
    }, []);
    return (
        <div className={styles.about}>
            <div className={styles.count}>
                <div className={styles.type1}>
                    <p className={styles.cnt}>{areas.rooms}</p>
                    <p className={styles.head}>ROOMS</p>
                </div>
                <div className={styles.type2}>
               <div className={styles.c1}>
                <div className={styles.c2}>
                    <div className={styles.c3}> 
                    <p className={styles.cnt}>0{areas.suits}</p>
                    <p className={styles.head}>SUITS</p>
                    </div>
                </div>
               </div>
                </div>
                <div className={styles.type1}>
                <p className={styles.cnt}>0{areas.halls}</p>
                    <p className={styles.head}>HALLS</p>
                </div>
            </div>
            <div className={styles.content} data-aos="fade-up">
                <p className={`${styles.title} ${styles.fadeIn}`}>
                We provide the best of both worlds: <span className={styles.diff}>luxury accommodation & full-serviced Rooms</span>. We are located in the most serene and beautiful area in the heart of nature.
                </p>
                <p className={styles.description}>
                    {data.description}
                </p>
            </div>
        </div>
    )
}
