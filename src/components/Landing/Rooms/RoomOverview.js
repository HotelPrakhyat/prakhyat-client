import React from 'react'
import styles from "./RoomOverview.module.scss"
import room from "../../../assets/room.jpeg"
import arrow from "../../../assets/arrow.svg"
export default function RoomOverview() {
    return (
        <section className={styles.container}>
            <div className={styles.room}>
                <div className={`${styles.title}`}>

                    {/* <img src={room} /> */}
                    <p>Rooms</p>
                </div>
                <div className={`${styles.title}`}>
                    {/* <img src={room} /> */}
                    <p>Deluxe</p></div>
                <div className={`${styles.title}`}>
                    {/* <img src={room} /> */}
                    <p>Suites</p>
                </div>
            </div>
            <div className={styles.lower}>
                <div className={styles.lowerbtn}><p>Accommodation</p></div>
                <div className={`${styles.arrow}`}>
                    <img src={arrow} alt="arrow" /></div>
            </div>
        </section>
    )
}
