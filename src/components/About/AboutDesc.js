import React, { useEffect, useState } from 'react'
import styles from "./About.module.scss"
import {fetchData} from "../../apis/fetch"
export default function AboutDesc() {
    const textToType = "Welcome to Prakhyat Hotel, nestled in the serene embrace of Maheshwar.";
    const [typedText, setTypedText] = useState('');
    const [details, setDetails] = useState([
        {
            "name": "Rooms",
            "count": "31"
        },
        {
            "name": "Suit",
            "count": "06"
        },
        {
            "name": "Hall",
            "count": "02"
        },
        {
            "name": "Garden",
            "count": "01"
        },
        {
            "name": "Parking",
            "count": "01"
        },
    ]);
    const [desc,setDesc] = useState("");
    useEffect(() => {
        let index = -1;
        const typingInterval = setInterval(() => {
            index++;
            setTypedText((prevText) => prevText + textToType[index]);
            if (index === textToType.length - 1) {

                clearInterval(typingInterval);
            }
        }, 90);
        return () => {
            clearInterval(typingInterval)
        };
    }, [textToType]);
    useEffect(() => {
        fetchData("about").then((data) => {
          // setDesc(data);
          setDesc(data[0].about);
        });
      }, []);
      
    return (
        <>
            <div className={styles.aboutdesc}>
                <div className={styles.desc}>
                    <div className={styles.animatedText}>
                        {typedText}
                    </div>
                    <p>{desc}</p>
                </div>
                <div className={styles.icons}>
                    {
                        details.map((detail) => {
                            return (
                                <div className={styles.icon}>
                                    <div className={styles.c1}>
                                        <div className={styles.c2}>
                                            <div className={styles.c3}>
                                                {detail.count}
                                            </div>
                                        </div>
                                    </div>
                                    <p className={styles.name}>{detail.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
