import React, { ReactNode } from 'react'
import styles from './SectionTitle.module.css'

export default ({ children }: { children: ReactNode }) => (
  <h2 className={styles.container}>
    {children}
  </h2>
)