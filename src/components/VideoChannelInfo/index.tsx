import React from 'react'
import styles from './VideoChannelInfo.module.css'
import { Flex, LeftColumn, CompactChannel, Button } from '..'

export default () => (
  <Flex centered className={styles.container}>
    <LeftColumn>
      <CompactChannel className={styles.compactChannel} />
    </LeftColumn>
    <Button className={styles.button} onClick={() => alert('This currently does nada.')}>
      Subscribe?
    </Button>
  </Flex>
)