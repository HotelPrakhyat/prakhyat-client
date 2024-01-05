import React from 'react'
import styles from "./Hero.module.scss"
import Navbar from '../Navbar/Navbar'
export default function Hero() {
  return (
    <div className={styles.hero}>
        <Navbar/>
    </div>
  )
}
