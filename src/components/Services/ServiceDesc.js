import React from 'react'
import styles from "./Services.module.scss"
export default function ServiceDesc({service}) {
  return (
    <div className={styles.servicedesc}>
        <div className={styles.content} style={{
          order: window.innerWidth >= 1024 ? service.index === '1' ? 1 : 2 : 1,
        }}>
            <div className={styles.c1}>
                <div className={styles.c2}>
                    <div className={styles.c3}>
                        {service.count}
                    </div>
                </div>
            </div>
            <p className={styles.title}>SERVICES</p>
            <p className={styles.name}>{service.name}</p>
            <p className={styles.desc}>{service.desc}</p>
        </div>
        <div className={styles.image} style={{
          order: window.innerWidth >= 1024 ? service.index === '1' ? 2 : 1:2,
        }}>
            <img src={service.img} alt="Service"/>
        </div>
    </div>
  )
}
