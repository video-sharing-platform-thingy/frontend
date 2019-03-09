import React, { Fragment } from 'react'
import { Container } from '../components'

interface Props {
  header: React.ReactNode
  main: React.ReactNode
  footer: React.ReactNode
}

export const Layout = ({
  header,
  main,
  footer
}: Props) => (
  <Fragment>
    {header}
    <Container>{main}</Container>
    {footer}
  </Fragment>
)
