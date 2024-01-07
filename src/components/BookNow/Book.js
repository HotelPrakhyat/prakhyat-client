import React from 'react'
import styles from "./Book.module.scss"
import room from "../../assets/room.jpeg"
export default function Book() {
  return (
    <div className={styles.book}> 
    <div className={styles.book2}>
        <img src={room} alt="Room"/>
        <div>

        </div>
    </div>
    </div>
  )
}
