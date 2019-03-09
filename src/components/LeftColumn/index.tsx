import React, { ReactNode } from 'react'
import styles from './LeftColumn.module.css'

export default ({ children }: { children: ReactNode }) => (
  <div className={styles.container}>
    {children}
  </div>
)
