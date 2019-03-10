import React from 'react'
import styles from './Navbar.module.css'
import { Text, ThemeToggle, LeftColumn } from '..'

export default () => (
  <nav className={styles.container}>
    <LeftColumn>
      <Text>VSPT</Text>
    </LeftColumn>
    <ThemeToggle />
  </nav>
)
