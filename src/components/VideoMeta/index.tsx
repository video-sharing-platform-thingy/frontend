import React from 'react'
import styles from './VideoMeta.module.css'
import { VideoTitle, Text } from '..'

export default () => (
  <div className={styles.container}>
    <VideoTitle>Alexander Rybak - INTO A FANTASY (official soundtrack for "How To Train Your Dragon 2")</VideoTitle>
    <Text muted>8,366,745 views</Text>
  </div>
)