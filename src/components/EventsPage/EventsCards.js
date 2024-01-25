import React from 'react'
import styles from "./Events.module.scss"
import Card from './Card'

export default function EventsCards({setHead,setImages,data}) {
  
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
