import React, { useEffect, useState } from 'react'
import styles from './ThemeToggle.module.css'
import { dark as darkTheme, light as lightTheme, dark } from '../../infrastructure/themes'
import Button from '../Button';

function saveThem() {
  document.documentElement.style.setProperty('--color--background', darkTheme.background)
  document.documentElement.style.setProperty('--color--text-main', darkTheme.textMain)
  document.documentElement.style.setProperty('--color--text-muted', darkTheme.textMuted)
}

function blindThem() {
  document.documentElement.style.setProperty('--color--background', lightTheme.background)
  document.documentElement.style.setProperty('--color--text-main', lightTheme.textMain)
  document.documentElement.style.setProperty('--color--text-muted', lightTheme.textMuted)
}

function toggleTheme(darkMode, setDarkMode) {
  console.log('toggwe')
  setDarkMode(!darkMode)
  darkMode ? blindThem() : saveThem()
}

export default () => {
  const [ darkMode, setDarkMode ] = useState(true)
  useEffect(darkMode ? saveThem : blindThem)

  return (
    <Button onClick={() => toggleTheme(darkMode, setDarkMode)}>
      {darkMode ? 'Blind me' : 'Save me'}
    </Button>
  )
}