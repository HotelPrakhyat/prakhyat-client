import React from 'react'
import styles from "./Landing.module.scss"
import Hero from './Hero/Hero'
import AboutOverview from './About/AboutOverview'
import Events from '../Events/Events'
export default function Landing() {
  return (
    <div className={styles.landing}>
        <Hero/>
        <AboutOverview/>
        <Events/>
    </div>
  )
}
