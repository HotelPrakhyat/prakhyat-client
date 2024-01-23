import React,{useEffect,useState} from 'react'
import styles from "./About.module.scss"
export default function AboutDesc() {
    const textToType = "Comfortably furnished spacious rooms with great accommodation";
    const [typedText, setTypedText] = useState('');
    const [details,setDetails] = useState([
        {"name":"Rooms",
        "count":"06"    
    },
        {"name":"Suit",
        "count":"06"    
    },
    {"name":"Hall",
        "count":"06"    
    },
    {"name":"Garden",
        "count":"06"    
    },
    {"name":"Parking",
        "count":"06"    
    },
    ]);
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
  return (
    <>
    <div className={styles.aboutdesc}>
        <div className={styles.desc}>
                <div className={styles.animatedText}>
                    {typedText}
                </div>
                <p>We offer a variety of rooms for the purpose you can easily choose. We provide you with the best quality of services and facilities for all your travel and place needs.</p>
            </div>
            <div className={styles.icons}>
               {
                details.map((detail)=>{
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
