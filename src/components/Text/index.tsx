import React, { ReactNode } from 'react'
import styles from './Text.module.css'
import classNames from 'classnames'

export default ({ children, muted, bold }: { children: ReactNode, muted?: boolean, bold?: boolean }) => (
  <p className={classNames(styles.container, {
    [ styles.muted ]: muted,
    [ styles.bold ]: bold
  })}>
    {children}
  </p>
)
