import React, { ReactNode } from 'react'
import styles from './Container.module.css'

export default ({ children }: { children: ReactNode }) => (
  <main className={styles.container}>
    {children}
  </main>
)