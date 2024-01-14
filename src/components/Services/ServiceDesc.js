import React from 'react'
import styles from "./Services.module.scss"
import { urlFor } from "../../apis/client";
export default function ServiceDesc({service,index}) {
  return (
    <div className={styles.servicedesc}>
        <div className={styles.content} style={{
          order: window.innerWidth >= 1024 ? index%2 !== 0 ? 1 : 2 : 1,
        }}>
            <div className={styles.c1}>
                <div className={styles.c2}>
                    <div className={styles.c3}>
                        0{index+1}
                    </div>
                </div>
            </div>
            <p className={styles.title}>SERVICES</p>
            <p className={styles.name}>{service.servicename}</p>
            <p className={styles.desc}>{service.servicedescription}</p>
        </div>
        <div className={styles.image} style={{
          order: window.innerWidth >= 1024 ? index%2 !== 0 ? 2 : 1:2,
        }}>
            <img src={urlFor(service.image.asset._ref)} alt="Service"/>
        </div>
    </div>
  )
}
