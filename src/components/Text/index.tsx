import React, { ReactNode } from 'react'
import styles from './Text.module.css'
import classNames from 'classnames'

export default ({ children, muted }: { children: ReactNode, muted?: boolean }) => (
  <p className={classNames(styles.container, {
    [ styles.muted ]: muted
  })}>
    {children}
  </p>
)