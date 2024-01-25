import React from 'react'
import styles from "./Footer.module.scss"
import logo from "../../../assets/logo2.svg"
import facbook from "../../../assets/facebook.svg"
import youtube from "../../../assets/youtube.svg"
import instagram from "../../../assets/instagram.svg"
import phone from "../../../assets/phone.svg"
import email from "../../../assets/email.svg"
import location from "../../../assets/location.svg"
import { Link } from 'react-router-dom'
export default function Footer
  () {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <div className={styles.logo}>
          <img src={logo} alt="logo"/>
          <div className={styles.social}>
          <p>Follow us</p>
          <div className={styles.icons}>
          <a href="#">  <img src={facbook} alt="facebook"/></a>
          <a href="#">  <img src={youtube} alt ="Youtube"/></a>
          <a href="#">  <img src={instagram} alt="Instagram"/></a>
          </div>
          </div>
        </div>
        <div className={styles.links}>
          <p className={styles.head}>Quick Links</p>
          <div className={styles.link}>
            <Link to="/" className={styles.a}>Home</Link>
            <Link to="/services" className={styles.a}>Services</Link>
            <Link to="/about" className={styles.a}>About Us</Link>
            <Link to="/events" className={styles.a}>Events</Link>
            <Link to="/rooms" className={styles.a}>Rooms</Link>
            <Link to="/contact" className={styles.a}>Contact Us</Link>
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
          <div className={styles.desc}><img src={email} alt='Email'/><p><a href="mailto:hotelprakhyat@gmail.com">hotelprakhyat@gmail.com</a></p></div>
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
