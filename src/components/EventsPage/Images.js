import React from 'react'
import styles from "./Events.module.scss"
import { urlFor } from '../../apis/client'
export default function Images({images}) {
  return (
    <div className={styles.images}>
        {
            images.map((image,index)=>{
                return(
                   <div className={styles.img}>
                     <img src={urlFor(image.asset._ref)} alt="Event Image" key={index}/>
                    </div>
                )
            })
        }
    </div>
  )
}
