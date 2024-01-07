import React, { useEffect ,useRef} from 'react'
import styles from "./Sidebar.module.scss"
import logo from "../../assets/logo.svg"
import close from "../../assets/close.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import youtube from "../../assets/youtube.svg"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
export default function Sidebar({setSidebar}) {
    const titleRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        // REVEAL //
        gsap.utils.toArray([titleRef.current]).forEach(function (elem) {
          ScrollTrigger.create({
            trigger: elem,
            start: "top 100%",
            end: "bottom 10%",
            markers: false,
            onEnter: function () {
              gsap.fromTo(
                elem,
                { y: 25, autoAlpha: 0 },
                {
                  duration: .9,
                  y: 0,
                  autoAlpha: 1,
                  ease: "sine.in",
                  overwrite: "auto"
                }
              );
            },
            onLeave: function () {
              gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            },
            onEnterBack: function () {
              gsap.fromTo(
                elem,
                { y: -10, autoAlpha: 0 },
                {
                  duration: .9,
                  y: 0,
                  autoAlpha: 1,
                  ease: "back",
                  overwrite: "auto"
                }
              );
            },
            onLeaveBack: function () {
              gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
            }
          });
        });
    
      }, [])
    const pages = [{ "pageNo": "01", "pageName": "HOME" },
    { "pageNo": "02", "pageName": "ABOUT US" },
    { "pageNo": "03", "pageName": "ROOMS" },
    { "pageNo": "04", "pageName": "SERVICES" },
    { "pageNo": "05", "pageName": "EVENTS" },
    { "pageNo": "06", "pageName": "BOOK" },
    { "pageNo": "07", "pageName": "CONTACT US" }
    ]
        ;
    return (
        <div className={styles.sidebar} >
           <div ref={titleRef}>
           <img src={close} alt="Close Button"className={styles.close} onClick={()=>{
                setSidebar(false);
            }}/>
            <img src={logo} alt="Logo" />
            <div className={styles.links} >
                <table>
                {
                    pages.map((page) => {
                        return (
                                    <tr>
                          
                                        <td><p className={styles.pageno}>{page.pageNo}</p></td>
                                        <td>
                                            <p className={styles.pagename}>{page.pageName}</p>
                                        </td>

                        
                                    </tr>
                        )
                    })
                }
                    </table>
            </div>
            <div className={styles.icons}>
                <img src={facebook} alt="Facebook"/>
                <img src={youtube} alt="Youtube"/>
                <img src={instagram} alt="insagram"/>
            </div>
           </div>
        </div>
    )
}
