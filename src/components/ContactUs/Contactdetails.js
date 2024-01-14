import React from 'react'
import styles from "./Detail.module.scss"
import email from "../../assets/email2.svg"
import phone from "../../assets/phone2.svg"
export default function Contactdetails() {
  return (
    <div className={styles.contactdetails}>
        
        <div className={styles.content}>
            <p className={styles.title}>ADDRESS</p>
            <p className={styles.address}>9, Natural Pavitra Nagar, Dhamnod Road, Maheshwar</p>
            <div className={styles.line}></div>
            <div className={styles.detail}>
                <div className={styles.icon}>
                   <div className={styles.img}>
                   <img src={email} alt="email"/>
                   </div>
                </div>
              <div className={styles.main}>
              <p className={styles.head}>Email Us</p>
                <p className={styles.desc}>hotelprakhyat@gmail.com</p>
              </div>
            </div>
            <div className={styles.detail}> 
                <div className={styles.icon}>
                <div className={styles.img}>
                    <img src={phone} alt="Phone"/>
                    </div>
                </div>
               <div className={styles.main}>
               <p className={styles.head}>Call Us</p>
                <p className={styles.desc}>+919165899611</p>
               </div>
            </div>
        </div>
        <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.518830906733!2d75.57467787603477!3d22.182380679771587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962650e16a5e24f%3A0x3f1bbf9efd809c58!2sNatural%20Pavitra%20Nagri!5e0!3m2!1sen!2sin!4v1705173304732!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
