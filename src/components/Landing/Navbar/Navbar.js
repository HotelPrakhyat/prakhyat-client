import React, { useEffect, useState } from 'react';
import menu from "../../../assets/menu.svg";
import logo from "../../../assets/logo.svg";
import styles from "./Navbar.module.scss";
import AOS from "aos"
import 'aos/dist/aos.css'
export default function Navbar({ setSidebar }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    console.log(window.scrollY)

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`${styles.navbar}`}>
        <div className={styles.upper}>
          <img src={logo} className={styles.logo} alt="icon" />
          <img src={menu} className={styles.menu} onClick={setSidebar} alt="icon" />
        </div>
        <div className={`${styles.lower} ${scrollY > 30 ? styles.invisible : ''}`} >
          <p className={styles.title} >PRAKHYAT</p>
          <div className={styles.hotel}>
            <div className={styles.line}></div>
            <p className={styles.hoteltitle}>HOTEL</p>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
    </>
  );
}
