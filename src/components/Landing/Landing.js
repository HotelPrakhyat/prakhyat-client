import React, { useEffect, useRef } from 'react'
import styles from "./Landing.module.scss"
import Hero from './Hero/Hero'
import AboutOverview from './About/AboutOverview'
import Events from '../Events/Events'
// import RoomOverview from './Rooms/RoomOverview'
import ServicesOverview from './Services/ServicesOverview'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function Landing() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // REVEAL //
    gsap.utils.toArray([titleRef.current]).forEach(function (elem) {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 100%",
        end: "bottom 10%",
        markers: false,
        onEnter: function () {
          gsap.fromTo(
            elem,
            { y: 25, autoAlpha: 0 },
            {
              duration: .9,
              y: 0,
              autoAlpha: 1,
              ease: "sine.in",
              overwrite: "auto"
            }
          );
        },
        onLeave: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
          gsap.fromTo(
            elem,
            { y: -10, autoAlpha: 0 },
            {
              duration: .9,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto"
            }
          );
        },
        onLeaveBack: function () {
          gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
      });
    });

  })
  return (
    <div className={styles.landing}>
      <Hero />
      <AboutOverview />
      <Events />
      <div ref={titleRef} >
        <ServicesOverview />
      </div>
    </div>
  )
}
