import React from 'react'
import styles from "./Services.module.scss"
import downarrow from "../../assets/downarrow.svg"
import wifi from "../../assets/wifi.svg"
import ServiceDesc from './ServiceDesc'
import room from "../../assets/room.jpeg"
import AOS from "aos"
import 'aos/dist/aos.css'
export default function Services() {
  const services = [
    {
      "icon": wifi,
      "title": "Lift",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      "icon": wifi,
      "title": "Parking",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      "icon": wifi,
      "title": "Geyser",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      "icon": wifi,
      "title": "Wifi",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      "icon": wifi,
      "title": "Parking",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, {
      "icon": wifi,
      "title": "Lift",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  const servicesDesc = [
    {
      "count": "01",
      "name": "Cleaning",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "img": room,
      "index":"1"

    },
    {
      "count": "02",
      "name": "Cleaning",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "img": room,
      "index": "2"

    },
    {
      "count": "03",
      "name": "Cleaning",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "img": room,
      "index": "1"

    },
    {
      "count": "04",
      "name": "Cleaning",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      "img": room,
      "index": "2"

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
                <p className={styles.desc}>{service.desc}</p>
              </div>
            )
          })
        }

      </div>
      {
        servicesDesc.map((service) => {
          return (
         <div data-aos="fade-up">
             <ServiceDesc service={service} />
          </div>
          )
        })
      }
    </div>
  )
}
