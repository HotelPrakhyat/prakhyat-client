import React,{useEffect} from 'react'
import styles from "./Events.module.scss"
import { urlFor } from '../../apis/client'
import { Routes, Route,useLocation } from "react-router-dom";
export default function Images({images}) {
  // const location = useLocation();
  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.images}>
        {
            images.map((image,index)=>{
                return(
                   <div className={styles.img}>
                     <img src={urlFor(image.asset._ref)} alt="Event Image" key={index}/>
                    </div>
                )
            })
        }
    </div>
  )
}
