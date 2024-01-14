import React, { useState, useEffect } from 'react'
import styles from "./Rooms.module.scss"
import room from "../../assets/room.jpeg"
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
      useEffect(() => {
        fetchData("rooms").then((data) => {
          setImages((prevContact) => ({
            ...prevContact,
            room: urlFor(data[0].roomimage.asset._ref),
            deluxe: urlFor(data[0].deluxeimage.asset._ref),
            suits: urlFor(data[0].sweetimage.asset._ref)
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
            "area": "300 square feet",
            "Price": "3000",
            "title": "Single room",
            "persons": [person, person],
            "facilities": [{ "icon": wifi, "facility": "TV" }, { "icon": lift, "facility": "Bathtub" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" },

            ],
            "index": "1",
        },
        {
            "image": images.deluxe,
            "area": "300 square feet",
            "Price": "3000",
            "title": "Deluxe room",
            "persons": [person, person, person, person],
            "facilities": [{ "icon": wifi, "facility": "TV" }, { "icon": lift, "facility": "Bathtub" }, { "icon": wifi, "facility": "Furniture" }],
            "index": "2"
        },
        {
            "image": images.suits,
            "area": "300 square feet",
            "Price": "3000",
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
                <p>We offer a variety of rooms and wellness packages for the purpose you can easily choose. We provide you with the best quality of services and facilities for all your travel and place needs.</p>
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
