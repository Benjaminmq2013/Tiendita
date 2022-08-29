import React from 'react'
import styles from "../../styles/index.module.scss"

export const Location = () => {
  return (
    <div className={styles.location_container}>
      <img
        className={styles.map_pin_icon}
        src="./icons/Property 1=map-pin.svg"
        alt=""
      />
      <span className={styles.location}>El Salvador, San Salvador</span>
      <hr className={styles.spacing_line} />
    </div>
  );
}
