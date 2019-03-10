import React, { ReactNode, MouseEvent } from 'react'
import styles from './Button.module.css'

export default ({ children, onClick }: { children: ReactNode, onClick?: (event: MouseEvent<HTMLButtonElement>) => void }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
)
