import React from 'react'
import styles from './Container.module.css'

export default ({ children }) => (
  <main className={styles.container}>
    {children}
  </main>
)