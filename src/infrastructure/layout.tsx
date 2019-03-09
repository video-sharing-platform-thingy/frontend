import React, { Fragment } from 'react'
import { Container } from '../components'

interface Props {
  header: React.ReactNode
  main: React.ReactNode
}

export const Layout = ({
  header,
  main
}: Props) => (
  <Fragment>
    {header}
    <Container>{main}</Container>
  </Fragment>
)
