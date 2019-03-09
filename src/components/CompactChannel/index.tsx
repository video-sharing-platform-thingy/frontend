import React from 'react'
import styles from './CompactChannel.module.css'
import { Text, Flex } from '..'

export default () => (
  <Flex centered className={styles.container}>
    <div className={styles.avatar} />
    <div className={styles.metaContainer}>
      <h3 className={styles.metaName}>AlexanderRybakVideo</h3>
      <Text muted>Uploaded on Oct 24, 2009</Text>
    </div>
  </Flex>
)
