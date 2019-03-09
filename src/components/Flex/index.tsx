import React, { ReactNode } from 'react'
import styles from './Flex.module.css'
import classNames from 'classnames'

export default ({ children, centered, end, className }: { children: ReactNode, centered?: boolean, end?: boolean, className?: string }) => (
  <div className={classNames(styles.container, {
    [ styles.centered ]: centered,
    [ styles.end ]: end
  }, className)}>
    {children}
  </div>
)