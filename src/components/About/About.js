import React, { useState } from 'react'
import styles from "./About.module.scss"
import downarrow from "../../assets/downarrow.svg"
export default function About() {
    const [description,setDesc]=useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ve");
  return (
    <div className={styles.about}>
        <div className={styles.content}>
        <div className={styles.contentbox}>
            <p className={styles.head}>ABOUT US</p>
            <p className={styles.desc}>{description}</p>
            <div className={styles.circle}>
                <img src={downarrow} alt="icon"/>
            </div>
        </div>
        </div>
        
    </div>
  )
}
