import React, { useEffect } from 'react'
import style from "./Contact.module.scss"
import downarrow from "../../assets/downarrow2.svg"
import Contactdetails from './Contactdetails'

export default function ContactUs
    () {


    return (
        <div className={style.contact}>
            <div className={style.content}>
                <p className={style.title}>
                    CONTACT US
                </p>
                <p className={style.desc}>
                    Would you like to find out how to get to us or you have a question you need to ask? Call us or e-mail us, here are all the contact information you need to know.
                </p>
                <a href='#detail'>
                    <div className={style.temp}>
                        <div className={style.arrow}>
                            <img src={downarrow} alt="Arrow" />
                            <p>find us</p>
                        </div>
                    </div>
                </a>
            </div>
            <div>

            </div>
            <div id="detail">
                <Contactdetails />
            </div>
        </div>
    )
}
