import React from 'react'
import styles from './Text.module.css'

export default ({ children }) => (
  <p className={styles.container}>
    {children}
  </p>
)