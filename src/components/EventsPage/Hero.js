import React, { useState } from 'react'
import styles from "./Events.module.scss"
import downarrow from "../../assets/downarrow.svg"
export default function 
({head}) {
   
    const handleScroll = () => {
      window.scrollTo({
        top: window.scrollY + window.innerHeight, // Scroll down by 100vh
        behavior: 'smooth', // Add smooth scrolling effect
      });
    };
  
  return (
    <div className={styles.hero}>
        <div className={styles.box}>
            <p className={styles.title}>ACTIONS</p>
            <p className={styles.head}>{head}</p>
            <div className={styles.circle} onClick={handleScroll}>
                <img src={downarrow} alt='icon'/>
            </div>
        </div>
    </div>
  )
}
