import React, { ReactNode } from 'react'
import styles from './VideoTitle.module.css'

export default ({ children }: { children: ReactNode }) => (
  <h1 className={styles.container}>
    {children}
  </h1>
)