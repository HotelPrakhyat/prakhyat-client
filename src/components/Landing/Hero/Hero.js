import React from 'react'
import styles from "./Hero.module.scss"
import book from "../../../assets/book.svg"
export default function Hero() {
  return (
    <div className={styles.hero}>

      <div className={styles.book}>
        <div className={styles.dashedcircle}>
          <div className={styles.bluredcircle}>
            <img src={book} />
          </div>
        </div>
        <button>BOOK NOW</button>
      </div>
    </div>
  )
}
