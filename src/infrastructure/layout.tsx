import React, { Fragment } from 'react'
import { Navbar, Container } from '../components'

interface Props {
  header?: React.ReactNode
  main: React.ReactNode
  footer?: React.ReactNode
}

export const Layout = ({
  header,
  main,
  footer
}: Props) => (
  <Fragment>
    {header || <Navbar/>}
    <Container>{main}</Container>
    {footer || <footer>test footer</footer>}
  </Fragment>
)
