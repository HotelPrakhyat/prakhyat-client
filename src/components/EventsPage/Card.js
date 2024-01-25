import React from 'react'
import styles from "./Events.module.scss"
import { urlFor } from "../../apis/client";
import arrow from "../../assets/downarrow.svg"
export default function Card({event,setImages}) {
  return (
    <div className={styles.card}>
       <div className={styles.img}>
       <img src={event ? urlFor(event.eventimages[0].asset._ref):null} alt="Event Cover" className={styles.cover}/>
       </div>
        <p className={styles.eventtitle}>{event && event.eventname}</p>
        <div className={styles.circle} onClick={()=>{
          setImages(event.eventimages)
        }}>
            <img src={arrow} alt='arrow'/>
        </div>
    </div>
  )
}
