import React,{useEffect, useState} from 'react'
import styles from "./Events.module.scss"
import Hero from './Hero'
import EventsCards from './EventsCards'
import Images from './Images'
import Gallery from '../Gallery/Gallery'
import { fetchData } from "../../apis/fetch"
export default function EventsPage() {
  const [head,setHead] = useState("HOTEL EVENTS");
  const[images,setImages] = useState(null);
  const [gallery,setGallery] = useState([]);
  const [data, setData] = useState(null);
  useEffect(() => {
      fetchData("events").then((data) => {
          setData(data)
    const uniqueImages = new Set();

    for (const event in data) {
      const eventImages = data[event].eventimages;
      eventImages.forEach((image) => {
        uniqueImages.add(image);
      });
    }
    setGallery([...uniqueImages]);
      });
  }, [])
  return (
    <>
    <div className={styles.events}>
      <Hero head={head}/>
      {images?<Images images={images}/>:<EventsCards setHead={setHead} setImages={setImages} data={data}/>}
    </div>
    {gallery && <Gallery title="GALLERY" images={gallery}/>}
    </>
  )
}
