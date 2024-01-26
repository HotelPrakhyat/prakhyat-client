import React from 'react'
import styles from "./Gallery.module.scss"
import { urlFor } from '../../apis/client'
export default function Gallery({images,title}) {
  return (
   <div className={styles.gallery}>
    <div className={styles.content}>
      <div className={styles.line}></div>
      <p>{title}</p>
      <div className={styles.line}></div>
    </div>
     <div className={styles.images}>
        {
            images.map((image,index)=>{
                return(
                   <div className={styles.img} key={index}>
                     <img src={urlFor(image.asset._ref)} alt="Event" />
                    </div>
                )
            })
        }
    </div>
   </div>
  )
}
