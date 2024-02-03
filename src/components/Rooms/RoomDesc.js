import React, { useState, useEffect } from 'react'
import styles from "./Rooms.module.scss"
import wifi from "../../assets/wifi.svg"
import person from "../../assets/person.svg"
import tv from "../../assets/tv.svg"
import wardrobe from "../../assets/wardrobe.svg"
import hairdryer from "../../assets/hairdryer.svg"
import fridge from "../../assets/fridge.svg"
import bed from "../../assets/bed.svg"
import sofa from "../../assets/sofa.svg"
import studytable from "../../assets/studytable.svg"
import housekeeping from "../../assets/housekeeping.svg"
import bathtub from "../../assets/bathtub.svg"
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
            "facilities": [{ "icon": wifi, "facility": "Wifi" }, { "icon": tv, "facility": "TV" }, { "icon": wardrobe, "facility": "Wardrobe" }, { "icon": bed, "facility": "Bed" }, { "icon": housekeeping, "facility": "Housekeeping" }, { "icon": hairdryer, "facility": "Hair dryer" },

            ],
            "index": "1",
        },
        {
            "image": images.deluxe,
            "area": "216 square feet",
            "Price": prices.deluxe,
            "title": "Deluxe room",
            "persons": [person, person, person, person],
            "facilities": [{ "icon": wifi, "facility": "Wifi" }, { "icon": tv, "facility": "TV" }, { "icon": wardrobe, "facility": "Wardrobe" }, { "icon": bed, "facility": "Bed" }, { "icon": housekeeping, "facility": "Housekeeping" }, { "icon": hairdryer, "facility": "Hair dryer" },],
            "index": "2"
        },
        {
            "image": images.suits,
            "area": "600 square feet",
            "Price": prices.suits,
            "title": "Suite",
            "persons": [person, person, person, person, person, person],
            "facilities": [{ "icon": wifi, "facility": "Wifi" }, { "icon": tv, "facility": "TV" }, { "icon": wardrobe, "facility": "Wardrobe" }, { "icon": bed, "facility": "Bed" }, { "icon": housekeeping, "facility": "Housekeeping" }, { "icon": hairdryer, "facility": "Hair dryer" },{"icon": bathtub, "facility":"Bathtub"},{"icon":studytable,"facility":"Study Table"},{"icon":fridge,"facility":"Mini Fridge "},{"icon":sofa,"facility":"Sofa"}],
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
