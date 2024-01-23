import React, { useEffect, useState } from 'react';
import styles from "./Rooms.module.scss"
import downarrow from "../../assets/downarrow.svg"
import RoomDesc from './RoomDesc';
export default function Room() {
  const text = ["31 comfortable rooms", "25 spacious rooms", "6 luxury suite"]
  const [textShow, setText] = useState(text[0]);

  const handleOptionHover = (index) => {
    setText(text[index]);
  };

  return (
    <>
      <div className={styles.room}>
        <div className={styles.content}>
          <p className={styles.title}>{textShow}</p>
          <div className={styles.options}>
            <p onMouseEnter={() => handleOptionHover(0)}>Rooms</p>
            <p onMouseEnter={() => handleOptionHover(1)}>Deluxe</p>
            <p onMouseEnter={() => handleOptionHover(2)}>Suites</p>
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
