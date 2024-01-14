import React, { useState, useEffect } from 'react'
import styles from "./Rooms.module.scss"
import room from "../../assets/room.jpeg"
import lift from "../../assets/lift.svg"
import wifi from "../../assets/wifi.svg"
import person from "../../assets/person.svg"
import RoomDetail from './RoomDetail'
export default function RoomDesc() {
    const textToType = "Comfortably furnished spacious rooms with great accommodation";
    const [typedText, setTypedText] = useState('');
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
            "image": room,
            "area": "300 square feet",
            "Price": "3000",
            "title": "Single room",
            "persons": [person, person],
            "facilities": [{ "icon": wifi, "facility": "TV" }, { "icon": lift, "facility": "Bathtub" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" }, { "icon": wifi, "facility": "Furniture" },

            ],
            "index": "1",
        },
        {
            "image": room,
            "area": "300 square feet",
            "Price": "3000",
            "title": "Deluxe room",
            "persons": [person, person, person, person],
            "facilities": [{ "icon": wifi, "facility": "TV" }, { "icon": lift, "facility": "Bathtub" }, { "icon": wifi, "facility": "Furniture" }],
            "index": "2"
        },
        {
            "image": room,
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
