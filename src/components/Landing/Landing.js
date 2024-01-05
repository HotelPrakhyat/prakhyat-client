import React from 'react'
import styles from "./Landing.module.scss"
import Hero from './Hero/Hero'
export default function Landing() {
  return (
    <div className={styles.landing}>
        <Hero/>
    </div>
  )
}
