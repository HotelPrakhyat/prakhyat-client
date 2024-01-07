import React, { useState } from 'react'
import menu from "../../../assets/menu.svg"
import logo from "../../../assets/logo.svg"
import styles from "./Navbar.module.scss"
import Sidebar from '../../Sidebar/Sidebar'
export default function 
({sidebar,setSidebar}) {
  
  
  return (
    <>
   
    <div className={styles.navbar}>
        <div className={styles.upper}>
            <img src={logo} className={styles.logo}/>
            <img src={menu} className={styles.menu} onClick={setSidebar}/>
        </div>
        <div className={styles.lower}>
        <p className={styles.title}>PRAKHYAT</p>
        <div className={styles.hotel}>
            <div className={styles.line}></div>
            <p className={styles.hoteltitle}>HOTEL</p>
            <div className={styles.line}></div>
        </div>
        </div>
    </div>
    
    </>
  )
}
