import React, { useEffect, useState } from 'react';
import styles from "./Rooms.module.scss"
import downarrow from "../../assets/downarrow.svg"
import RoomDesc from './RoomDesc';
export default function Room() {
  const text = ["16 comfortable rooms", "11 spacious rooms", "6 luxury suite"]
  const [textShow, setText] = useState(text[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = text.indexOf(textShow);
      const nextIndex = (currentIndex + 1) % text.length;
      setText(text[nextIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, [textShow, text]);

  return (
    <>
      <div className={styles.room}>
        <div className={styles.content}>
          <p className={styles.title}>{textShow}</p>
          <div className={styles.options}>
            <p>Rooms</p>
            <p>Deluxe</p>
            <p>Suites</p>
          </div>
          <div className={styles.temp}>
            <a href='#description'> <div className={styles.arrow}>
              <img src={downarrow} alt="Arrow" />
              <p>CHOOSE</p>
            </div></a>
          </div>
        </div>
      </div>
      <div id="description">
        <RoomDesc />
      </div>
    </>
  )
}
