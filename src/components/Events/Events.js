import React from 'react'
import styles from "./Events.module.scss"
export default function Events() {
    const data = [
        {
"images":[{"image":"https://hotelemc2.com/wp-content/uploads/2019/09/Benefits-of-Booking-Hotels-for-Private-Events.png", "title": "New Year's Eve"},{"image":"https://www.swissotel.com/assets/0/92/3686/3768/3770/6442451433/9fe03051-89e2-40bf-9c00-674427b4cd0c.jpg", "title": "New Year's Eve"},{"image":"https://www.langhamhotels.com/content/dam/langhamhotels/dynamicmedia/north_america/the-langham-chicago-tlchi/plan/event-list/tlchi-events.jpg", "title": "New Year's Eve"},{"image":"https://hotelemc2.com/wp-content/uploads/2019/09/Benefits-of-Booking-Hotels-for-Private-Events.png", "title": "New Year's Eve"},{"image":"https://hotelemc2.com/wp-content/uploads/2019/09/Benefits-of-Booking-Hotels-for-Private-Events.png", "title": "New Year's Eve"},{"image":"https://hotelemc2.com/wp-content/uploads/2019/09/Benefits-of-Booking-Hotels-for-Private-Events.png", "title": "New Year's Eve"},{"image":"https://hotelemc2.com/wp-content/uploads/2019/09/Benefits-of-Booking-Hotels-for-Private-Events.png", "title": "New Year's Eve"},{"image":"https://hotelemc2.com/wp-content/uploads/2019/09/Benefits-of-Booking-Hotels-for-Private-Events.png", "title": "New Year's Eve"},]           
        },
        
        ]
    return (

        <div className={styles.events}>
            <div className={styles.head}>
                <div className={styles.line}></div>
                <p>EVENTS</p>
                <div className={styles.line}></div>
            </div>
            <div className={styles.sliders}>
            {
                data.map((events)=>{
                    return(
                      <div className={styles.images1}>
                         { events["images"].map((image)=>{
                            return(
                               <div className={styles.container}>
                                 <img src={image.image}/>
                                 <p>{image.title}</p>
                                </div>
                            )
                        })}
                        </div>
                        
                    )
                })
                
            }
            {
                data.map((events)=>{
                    return(
                        <div className={styles.images2}>
                        { events["images"].map((image)=>{
                           return(
                              <div className={styles.container}>
                                <img src={image.image}/>
                                <p>{image.title}</p>
                               </div>
                           )
                       })}
                       </div>
                        
                    )
                })
            }
            </div>
        </div>
    )
}
