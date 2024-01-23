import React from 'react'
import styles from "./ServicesOverview.module.scss"
import geysers from "../../../assets/geyser.svg"
import parking from "../../../assets/parking.svg"
import lift from "../../../assets/lift.svg"
import arrow from "../../../assets/arrow.svg"
import wifi from "../../../assets/wifi.svg"
export default function ServicesOverview() {
    const service = [
        {
            "servieName": "Parking",
            "serviceImg": parking
        },
        {
            "servieName": "Geysers",
            "serviceImg": geysers
        },
        {
            "servieName": "Tour Packages",
            "serviceImg": parking
        },
        {
            "servieName": "Lift",
            "serviceImg": lift
        },
        {
            "servieName": "Wifi",
            "serviceImg": wifi
        },
        {
            "servieName": "TV",
            "serviceImg": wifi
        },
        {
            "servieName": "Shopping",
            "serviceImg": wifi
        },
        {
            "servieName": "Guide",
            "serviceImg": wifi
        },
        {
            "servieName": "Guide",
            "serviceImg": wifi
        },
        {
            "servieName": "Guide",
            "serviceImg": wifi
        },

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
                            <img src={ele.serviceImg} alt="icon" />
                            <p>{ele.servieName}</p>
                        </div>
                        )
                    })
                }
            </div>
            <div className={styles.button}>
                <div className={styles.btn}>
                    <p>Explore</p>
                    <div className={styles.imag}>   <img src={arrow} alt="arrow" /></div>
                </div>
            </div>
        </div>
    )
}
