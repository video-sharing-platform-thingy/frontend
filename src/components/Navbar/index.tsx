import React from 'react'
import styles from './Navbar.module.css'
import { Text, ThemeToggle } from '..'

export default () => (
  <nav className={styles.container}>
    <Text>VSPT</Text>
    <ThemeToggle />
  </nav>
)
