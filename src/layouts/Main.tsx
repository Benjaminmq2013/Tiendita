import React from 'react'
import styles from "../styles/index.module.scss"

interface params{
    children: JSX.Element | JSX.Element[]
}

export const Main = ({ children }:params):JSX.Element => {
  return (
    <main className={ styles.main }>
        { children }
    </main>
  )
}
