import React from 'react'
import styles from "./ServicesOverview.module.scss"
import arrow from "../../../assets/arrow.svg"
import wifi from "../../../assets/wifi.svg"
import geyser from "../../../assets/geyser.svg"
import parking from "../../../assets/parking.svg"
import lift from "../../../assets/lift.svg"
import security from "../../../assets/security.svg"
import cab from "../../../assets/taxi.svg"
import tourguide from "../../../assets/tourguide.svg"
import { Link } from 'react-router-dom'
export default function ServicesOverview() {
    const service = [
        {
            "icon": wifi,
            "title": "Wifi"
          }, {
            "icon": parking,
            "title": "Parking"
          }, {
            "icon": geyser,
            "title": "Geyser",
          }, {
            "icon": security,
            "title": "Security",
          }, {
            "icon": cab,
            "title": "Cab Service",
          }, {
            "icon": tourguide,
            "title": "Tour Guide",
          }
    ]
    return (
        <div className={styles.services}>
            <div className={styles.head}>
                <p>SERVICES</p>
                <div className={styles.line}></div>
            </div>
            <div className={styles.desc}>
                <p>"Discover Comfort, Discover Convenience" - At Prakhyat Hotel, we blend seamless service with luxury. From spacious parking to tranquil gardens and elegant event spaces, each detail is crafted for your delight. Embrace the ease of cab services and city tours, all while enjoying the comfort of our well-appointed rooms.
</p>
            </div>
            <div className={styles.services}>
                {
                    service.map((ele, ind) => {
                        return (<div key={ind} className={styles.service}>
                            <img src={ele.icon} alt="icon" />
                            <p>{ele.title}</p>
                        </div>
                        )
                    })
                }
            </div>
            <Link to="/services"> 
            <div className={styles.button}>
                <div className={styles.btn}>
                    <p>Explore</p>
                    <div className={styles.imag}>   <img src={arrow} alt="arrow" /></div>
                </div>
            </div>
            </Link>
        </div>
    )
}
