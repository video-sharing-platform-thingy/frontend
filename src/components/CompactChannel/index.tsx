import React from 'react'
import styles from './CompactChannel.module.css'
import { Text, Flex } from '..'
import classNames from 'classnames'

export default ({ className }: { className?: string }) => (
  <Flex centered className={classNames(styles.container, className)}>
    <div className={styles.avatar} />
    <div className={styles.metaContainer}>
      <h3 className={styles.metaName}>AlexanderRybakVideo</h3>
      <Text muted>Uploaded on Oct 24, 2009</Text>
    </div>
  </Flex>
)
