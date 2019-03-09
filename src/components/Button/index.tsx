import React, { ReactNode } from 'react'
import styles from './Button.module.css'

export default ({ children }: { children: ReactNode }) => (
  <button className={styles.button}>
    {children}
  </button>
)