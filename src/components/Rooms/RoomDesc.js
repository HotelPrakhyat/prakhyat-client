import React, { useState, useEffect } from 'react'
import styles from "./Rooms.module.scss"
import lift from "../../assets/lift.svg"
import wifi from "../../assets/wifi.svg"
import person from "../../assets/person.svg"
import RoomDetail from './RoomDetail'
import {fetchData} from "../../apis/fetch";
import { urlFor } from "../../apis/client";
export default function RoomDesc() {
    const textToType = "Comfortably furnished spacious rooms with great accommodation";
    const [typedText, setTypedText] = useState('');
    const [images,setImages] = useState({
        "room":null,
        "deluxe":null,
        "suits":null
      });
      const [prices,setPrice]=useState({
        "room":0,
        "deluxe":0,
        "suits":0
      });
      useEffect(() => {
        fetchData("rooms").then((data) => {
        //    console.log(data[0].roomimage.roomimage);
          setImages((prevContact) => ({
            ...prevContact,
            room: urlFor(data[0].roomimage.roomimage.asset._ref),
            deluxe: urlFor(data[0].deluxeimage.deluxeimage.asset._ref),
            suits: urlFor(data[0].sweetimage.sweetimage.asset._ref)
          }));
          setPrice((prevContact) => ({
            ...prevContact,
            room: (data[0].roomimage.normalroomprice),
            deluxe: (data[0].deluxeimage.deluxeroomprice),
            suits: (data[0].sweetimage.sweetroomprice)
          }));
        });
      }, []);
    useEffect(() => {
        let index = -1  ;
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
    const details = [
        {
            "image": images.room,
            "area": "180 square feet",
            "Price": prices.room,
            "title": "Single room",
            "persons": [person, person],
            "facilities": [{ "icon": wifi, "facility": "TV" }, { "icon": lift, "facility": "Bathtub" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" },

            ],
            "index": "1",
        },
        {
            "image": images.deluxe,
            "area": "216 square feet",
            "Price": prices.deluxe,
            "title": "Deluxe room",
            "persons": [person, person, person, person],
            "facilities": [{ "icon": wifi, "facility": "TV" }, { "icon": lift, "facility": "Bathtub" }, { "icon": wifi, "facility": "Furniture" }],
            "index": "2"
        },
        {
            "image": images.suits,
            "area": "600 square feet",
            "Price": prices.suits,
            "title": "Suite",
            "persons": [person, person, person, person, person, person],
            "facilities": [{ "icon": wifi, "facility": "TV" }, { "icon": lift, "facility": "Bathtub" }, { "icon": wifi, "facility": "Furniture" }],
            "index": "1"
        }
    ]
    return (
        <div className={styles.roomdesc}>

            <div className={styles.desc}>
                <div className={styles.animatedText}>
                    {typedText}
                </div>
                <p>We offer a variety of rooms for the purpose you can easily choose. We provide you with the best quality of services and facilities for all your travel and place needs.</p>
            </div>
            {
                details.map((detail, index) => {
                    return (
                        <RoomDetail detail={detail} index={index} key={index} />
                    )
                })
            }
        </div>
    )
}
