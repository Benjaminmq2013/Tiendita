import React from 'react'
import styles from "../../styles/index.module.scss"


const Hero = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero}>
        <h1 className={styles.hero__title}>
          ¡Adquiere todos tus productos favoritos al mejor precio!
        </h1>
      </div>
    </section>
  );
}

export default Hero