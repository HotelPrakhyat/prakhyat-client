import React, { useEffect,useState } from 'react'
import styles from "./About.module.scss"
import downarrow from "../../assets/downarrow.svg"
import {fetchData} from "../../apis/fetch"
export default function About() {
    const [description,setDesc]=useState("Prakhyat Hotel - Where Every Stay is a Story, Every Guest a Family.");
    useEffect(() => {
      fetchData("about").then((data) => {
        // setDesc(data);
        setDesc(data[0].about);
      });
    }, []);
  return (
    <div className={styles.about}>
        <div className={styles.content}>
        <div className={styles.contentbox}>
            <p className={styles.head}>ABOUT US</p>
            <p className={styles.desc}>{description}</p>
            <div className={styles.circle}>
                <img src={downarrow} alt="icon"/>
            </div>
        </div>
        </div>
        
    </div>
  )
}
