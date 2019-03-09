import React from 'react'
import { Navbar, Container, VideoColumn, Player } from '../components'

export default () => (
  <>
    <Navbar />
    <Container>
      <VideoColumn>
        <Player />
      </VideoColumn>
    </Container>
  </>
)