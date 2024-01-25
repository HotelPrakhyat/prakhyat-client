import React,{useState} from 'react'
import styles from "./Events.module.scss"
import Hero from './Hero'
import EventsCards from './EventsCards'
import Images from './Images'
export default function EventsPage() {
  const [head,setHead] = useState("HOTEL EVENTS");
  const[images,setImages] = useState(null);
  return (
    <div className={styles.events}>
      <Hero head={head}/>
      {images?<Images images={images}/>:<EventsCards setHead={setHead} setImages={setImages}/>}
    </div>
  )
}
