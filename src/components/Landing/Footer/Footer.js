import React from 'react'
import styles from "./Footer.module.scss"
import logo from "../../../assets/logo2.svg"
import facbook from "../../../assets/facebook.svg"
import youtube from "../../../assets/youtube.svg"
import instagram from "../../../assets/instagram.svg"
import phone from "../../../assets/phone.svg"
import email from "../../../assets/email.svg"
import location from "../../../assets/location.svg"
export default function
  () {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"/>
          <div className={styles.social}>
          <p>Follow us</p>
          <div className={styles.icons}>
          <a>  <img src={facbook} alt="facebook"/></a>
          <a>  <img src={youtube} alt ="Youtube"/></a>
          <a>  <img src={instagram} alt="Instagram"/></a>
          </div>
          </div>
        </div>
        <div className={styles.links}>
          <p className={styles.head}>Quick Links</p>
          <div className={styles.link}>
            <a>Home</a>
            <a>Services</a>
            <a>About Us</a>
            <a>Events</a>
            <a>Rooms</a>
            <a>Contact Us</a>
          </div>
        </div>
        <div className={styles.address}>
          <div className={styles.temp}>
          <p className={styles.head}>Admin Office</p>
          <div>
          <div className={styles.desc}><img src={location} alt="Location"/><p>
            9, Natural Pavitra Nagar, Dhamnode Road, Maheshwar
            </p></div>
          <div className={styles.desc}><img src={phone} alt="Phone"/><p>+919165899611</p></div>
          <div className={styles.desc}><img src={email} alt='Email'/><p>hotelprakhyat@gmail.com</p></div>
          </div>
        </div>
          </div>
      </div>
      <div className={styles.lower}>
        <p>© 2024 Hotel Prakhyat. All Right Reserved.</p>
      </div>
    </div>
  )
}
