import React from 'react'
import styles from "./Hero.module.scss"
import book from "../../../assets/book.svg"
import { Link } from 'react-router-dom'
// import hero from "../../../assets/hero.webm"
export default function Hero() {
  return (
    <div className={styles.hero}>
        
          <video
            // src={hero}
            type="video/mp4"
           
            autoPlay
            muted
            loop
           
            preload="none"
            style={{ objectFit: "cover",width:"100%",height:"100%" }}
          />
     <Link to="/book" >
     <div className={styles.book}>
        <div className={styles.dashedcircle}>
          <div className={styles.bluredcircle}>
            <img src={book} alt="icon"/>
          </div>
        </div>
        <button>BOOK NOW</button>
      </div>
     </Link>
    </div>
  )
}
