import React from 'react';
import styles from './Rooms.module.scss';
import { Link } from 'react-router-dom';

export default function Room({ detail, index }) {
  return (
    <div className={styles.roomdetails}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${detail.image})`,
          order: window.innerWidth >= 1204 && detail.index === '1' ? 1 : 2,
        }}
      >
        <div className={styles.box}>
          <div className={styles.innerbox}>
            <div>
              <p className={styles.title}>Area</p>
              <p className={styles.val}>{detail.area}</p>
            </div>
            <div className={styles.line}></div>
            <div>
              <p className={styles.title}>Price</p>
              <p className={styles.val}>{detail.Price}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.facilities}
        style={{
          order: window.innerWidth >= 1204 && detail.index === '1' ? 2 : 1,
        }}
      >
        <div className={styles.person}>
          {detail.persons.map((icon, index) => (
            <img src={icon} alt="persons" key={index} />
          ))}
        </div>
        <p className={styles.title}>{detail.title}</p>
        <div className={styles.facilitiesDesc}>
          {detail.facilities.map((facility, index) => (
            <div className={styles.facility} key={index}>
              <img src={facility.icon} alt="Icon" />
              <p>{facility.facility}</p>
            </div>
          ))}
        </div>
        <Link to="/book" style={{ textDecoration: 'none' }}>
          <div className={styles.btn}>
            <p>Book Now</p>
            <div className={styles.imag}></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
