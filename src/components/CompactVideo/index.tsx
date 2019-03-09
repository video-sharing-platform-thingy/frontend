import React from 'react'
import styles from './CompactVideo.module.css'
import Shiitake from 'shiitake'
import { Text } from '..'

export default () => (
  <div className={styles.container}>
    <div className={styles.thumbnailContainer}>
      <div className={styles.thumbnail}></div>
    </div>
    <div className={styles.metaContainer}>
      <Shiitake lines={2} throttleRate={200} className={styles.metaTitle} tagName='h3'>
        How to Train your Dragon 2 Soundtrack - 19 Where No one Goes (Jónsi)
      </Shiitake>
      <Text muted>
        MarioSoundtrack
        <br />
        885K Views
      </Text>
    </div>
  </div>
)