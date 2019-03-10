import React, { ReactNode, MouseEvent } from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

export default ({ children, onClick, className }: { children: ReactNode, onClick?: (event: MouseEvent<HTMLButtonElement>) => void, className?: string }) => (
  <button className={classNames(styles.button, className)} onClick={onClick}>
    {children}
  </button>
)
