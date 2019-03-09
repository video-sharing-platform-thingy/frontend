import React from 'react'
import styles from './VideoColumn.module.css'

export default ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)