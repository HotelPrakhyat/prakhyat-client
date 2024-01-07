import React, { useEffect } from 'react'
import styles from "./Sidebar.module.scss"
import logo from "../../assets/logo.svg"
import close from "../../assets/close.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import youtube from "../../assets/youtube.svg"
import AOS from "aos"
import 'aos/dist/aos.css'
export default function Sidebar({ setSidebar }) {
  const pages = [{ "pageNo": "01", "pageName": "HOME" },
  { "pageNo": "02", "pageName": "ABOUT US" },
  { "pageNo": "03", "pageName": "ROOMS" },
  { "pageNo": "04", "pageName": "SERVICES" },
  { "pageNo": "05", "pageName": "EVENTS" },
  { "pageNo": "06", "pageName": "BOOK" },
  { "pageNo": "07", "pageName": "CONTACT US" }
  ]
    ;
    useEffect(() => {
      AOS.init({duration:1500,delay:"50"})
    }, []);
  return (
    <div className={styles.sidebar} data-aos="fade-up">
      <div className={styles.side}>
      <div>
        <img src={close} alt="Close Button" className={styles.close} onClick={() => {
          setSidebar(false);
        }} />
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
          <img src={facebook} alt="Facebook" />
          <img src={youtube} alt="Youtube" />
          <img src={instagram} alt="insagram" />
        </div>
      </div>
      </div>
    </div>
  )
}
