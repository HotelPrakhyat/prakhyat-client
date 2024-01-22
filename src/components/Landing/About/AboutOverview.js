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
        "description": "Welcome to Prakhyat Hotel, Where Maheshwar's Charm Meets Modern Comfort. Enter the enchanting world of Prakhyat Hotel, a place where the rich history of Maheshwar blends seamlessly with modern luxury. Feel the calm in every corner, from our peaceful garden to the delightful selfie spot. Let simple moments become precious memories amidst the beauty of our lush surroundings. At Prakhyat Hotel, we're more than just a place to stay; we create experiences that combine today's elegance with Maheshwar's timeless allure. Join us on a journey of discovery and delight, where each moment is a treasure, making your stay truly unforgettable."
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
                We provide the best of both worlds: <span className={styles.diff}>luxury accommodation & full-serviced AC Rooms</span>. We are located in the most serene and beautiful area in the heart of nature.
                </p>
                <p className={styles.description}>
                    {data.description}
                </p>
            </div>
        </div>
    )
}
