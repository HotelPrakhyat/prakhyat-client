import React, { useState, useEffect } from 'react'
import styles from "./Events.module.scss"
import Card from './Card'
import { fetchData } from "../../apis/fetch"
export default function EventsCards({setHead,setImages}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData("events").then((data) => {
            setData(data);
        });
    }, [])
    return (
        <div className={styles.eventcards} >
            {
                data && data.map((event,ind) => {
                    return (
                        <div onMouseEnter={()=>{
                            setHead(event.eventname)
                        }}
                        onMouseLeave={()=>{
                            setHead("HOTEL EVENTS")
                        }}
                        key={ind}
                        >
                            <Card event={event} setImages={setImages}/>
                            </div>
                    )
                })
            }
        </div>
    )
}
