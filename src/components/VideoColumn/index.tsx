import React, { ReactNode } from 'react'
import styles from './VideoColumn.module.css'

export default ({ children }: { children: ReactNode }) => (
  <div className={styles.container}>
    {children}
  </div>
)
