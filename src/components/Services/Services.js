import React,{useState,useEffect} from 'react'
import styles from "./Services.module.scss"
import downarrow from "../../assets/downarrow.svg"
import wifi from "../../assets/wifi.svg"
import geyser from "../../assets/geyser.svg"
import parking from "../../assets/parking.svg"
import lift from "../../assets/lift.svg"
import security from "../../assets/security.svg"
import cab from "../../assets/taxi.svg"
import tourguide from "../../assets/tourguide.svg"
import ac from "../../assets/ac.svg"
import ServiceDesc from './ServiceDesc'
import AOS from "aos"
import {fetchData} from "../../apis/fetch"
import 'aos/dist/aos.css'
export default function Services() {
  const [servicesDesc,setservicesDesc] =useState(null)
  useEffect(() => {
    fetchData("services").then((data) => {
      setservicesDesc(data);
    });
  }, []);
  const services = [
    {
      "icon": ac,
      "title": "A.C."
    },
    {
      "icon": wifi,
      "title": "Wifi"
    }, {
      "icon": parking,
      "title": "Parking"
    }, {
      "icon": geyser,
      "title": "Geyser",
    }, {
      "icon": security,
      "title": "Security",
    }, {
      "icon": cab,
      "title": "Cab Service",
    }, {
      "icon": tourguide,
      "title": "Tour Guide",
    }
  ]
  
  return (
    <div className={styles.services}>
      <p className={styles.text1}>WE OFFER</p>
      <p className={styles.text2}>Hotel services for our guests</p>
      <div className={styles.temp}>
        <a href='#description'> <div className={styles.arrow}>
          <img src={downarrow} alt="Arrow" />
          <p>explore</p>
        </div></a>
      </div>
      <div className={styles.allservice} id="description">
        {
          services.map((service, ind) => {
            return (
              <div className={styles.service} key={ind}>
                <div className={styles.icon}>
                  <div className={styles.c1}>
                    <div className={styles.c2}>
                      <img src={service.icon} alt="icon" />
                    </div>
                  </div>
                </div>
                <p>{service.title}</p>
                {/* <p className={styles.desc}>{service.desc}</p> */}
              </div>
            )
          })
        }

      </div>
      {
        servicesDesc && servicesDesc.map((service,index) => {
          return (
         <div data-aos="fade-up">
             <ServiceDesc service={service} index={index}/>
          </div>
          )
        })
      }
    </div>
  )
}
