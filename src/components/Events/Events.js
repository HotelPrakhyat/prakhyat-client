import React, { useEffect, useState } from 'react'
import styles from "./Events.module.scss"
import { fetchData } from "../../apis/fetch"
import { urlFor } from "../../apis/client";
export default function Events() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData("events").then((data) => {
            setData(data);
        });
    }, [])
    return (

        <div className={styles.events}>
            <div className={styles.head}>
                <div className={styles.line}></div>
                <p>EVENTS</p>
                <div className={styles.line}></div>
            </div>
            <div className={styles.sliders}>
                <div className={styles.images1}>
                    {
                        data && data.map((events) => {
                            return (
                                <div className={styles.container}>
                                    <img src={urlFor(events.eventimages[0].asset._ref)} alt="event" />
                                    <p>{events.eventname}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.images2}>
                    {
                        data && data.map((events) => {
                            return (

                                <div className={styles.container}>
                                    <img src={urlFor(events.eventimages[0].asset._ref)} alt="event" />
                                    <p>{events.eventname}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}