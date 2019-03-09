interface Theme {
  background: string,
  textMain: string,
  textMuted: string
}

interface ThemeMap {
  dark: Theme,
  light: Theme
}

export default {
  dark: {
    background: '#272727',
    textMain: '#ffffff',
    textMuted: '#b7b7b7'
  },
  light: {
    background: '#fafafa',
    textMain: '#000000',
    textMuted: '#828282'
  }
} as ThemeMap