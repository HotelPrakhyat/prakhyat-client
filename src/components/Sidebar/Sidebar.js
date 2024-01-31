import React, { useEffect } from 'react'
import styles from "./Sidebar.module.scss"
import logo from "../../assets/logo.svg"
import close from "../../assets/close.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import youtube from "../../assets/youtube.svg"
import AOS from "aos"
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
export default function Sidebar({ setSidebar }) {
  const pages = [{ "pageNo": "01", "pageName": "HOME", "link": "/" },
  { "pageNo": "02", "pageName": "ABOUT US","link":"/about" },
  { "pageNo": "03", "pageName": "ROOMS", "link": "/rooms" },
  { "pageNo": "04", "pageName": "SERVICES","link":"/services" },
  { "pageNo": "05", "pageName": "EVENTS" ,"link":"/events"},
  { "pageNo": "06", "pageName": "BOOK", "link": "/book" },
  { "pageNo": "07", "pageName": "CONTACT US","link":"/contact" }
  ]
    ;
  useEffect(() => {
    AOS.init({ duration: 1500, delay: "50" })
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
              <tbody>
                {
                  pages.map((page, ind) => {
                    return (
                      <tr key={ind}>
                        <Link to={page.link} onClick={() => {
                          setSidebar(false)
                        }} style={{ textDecoration: "none" }} >

                          <div>
                            <td><p className={styles.pageno}>{page.pageNo}</p></td>
                            <td>
                           <div className={styles.b}>
                           <div className={styles.line}></div>
                            </div></td>
                            <td>
                              <p className={styles.pagename}>{page.pageName}</p>
                            </td>

                          </div>
                        </Link>

                      </tr>
                    )
                  })
                }
              </tbody>
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
