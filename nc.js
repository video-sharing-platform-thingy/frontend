const fs = require('fs')
const name = process.argv[2]
if (!name) {
  console.error('You must specify a component name!')
  process.exit(1)
}
fs.mkdirSync(`src/components/${name}`)
fs.writeFileSync(`src/components/${name}/index.tsx`, `
import React from 'react'
import styles from './${name}.module.css'

export default () => (
  <div className={styles.container}>

  </div>
)
`.trim())
fs.writeFileSync(`src/components/${name}/${name}.module.css`, `
.container {
  
}
`.trim()
const compIndex = fs.readFileSync('src/components/index.ts')
fs.writeFileSync('src/components/index.ts', `
${compIndex}
export { default as ${name} } from './${name}'
`.trim())
console.log('Component created!')