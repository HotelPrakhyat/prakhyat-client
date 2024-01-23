import React,{useState,useEffect} from 'react'
import styles from "./Book.module.scss"
import room from "../../assets/reception.png"
import reception from "../../assets/reception.svg"
import phone from "../../assets/phone.svg"
import email from "../../assets/email.svg"
import {fetchData} from "../../apis/fetch"
export default function Book() {
    const [contact,setContact] =useState({
        "phone":"Loading.....",
        "email":"Loading....."
      })
      useEffect(() => {
        fetchData("contactus").then((data) => {
          setContact((prevContact) => ({
            ...prevContact,
            phone: data[0].phone,
            email: data[0].email
          }));
        });
      }, []);
    return (
        <div className={styles.book}>
            <div className={styles.book2}>
                <img src={room} alt="Room" />
                <div className={styles.info}>
                    <div className={styles.intro}>
                        <div className={styles.c1}>
                            <div className={styles.c2}>
                                <div className={styles.c3}>
                                    <img src={reception} alt='Reception' />
                                </div>
                            </div>
                        </div>
                        <p className={styles.title}>RECEPTION</p>
                        <p className={styles.desc}>BOOK NOW</p>
                        <div className={styles.contact}>
                                       <div className={styles.temp}>
                                       <div className={styles.icon}> 
                                            <div className={styles.c1}>
                                                <div className={styles.c2}>
                                                <img src={phone} alt="Phone" />
                                                </div>
                                            </div>
                                        </div>
                                            <p>{contact.phone}</p>
                                       </div>
                                      
                                       <div className={styles.temp}>
                                       <div className={styles.icon}>
                                        <div className={styles.c1}>
                                                <div className={styles.c2}>
                                            <img src={email} alt="Email" />
                                            </div>
                                            </div>
                                        </div>
                                            <p>{contact.email}</p>
                                       </div>
                                       </div>

                        </div>
                    </div>
                    </div>
                </div>

    )
}
