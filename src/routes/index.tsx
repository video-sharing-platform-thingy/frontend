import React from 'react'
import { Navbar, Container, VideoColumn, Player, Text, VideoTitle, RecommendationsColumn, SectionTitle, CompactVideo, Button, CompactChannel, Flex, LeftColumn } from '../components'

export default () => (
  <>
    <VideoColumn>
      <Player />
      <VideoTitle>Alexander Rybak - INTO A FANTASY (official soundtrack for "How To Train Your Dragon 2")</VideoTitle>
      <Text muted>8,366,745 views</Text>
      <Flex centered>
        <LeftColumn>
          <CompactChannel />
        </LeftColumn>
        <Button>
          Subscribe?
        </Button>
      </Flex>
    </VideoColumn>
    <RecommendationsColumn>
      <SectionTitle>Similar videos</SectionTitle>
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
      <CompactVideo />
    </RecommendationsColumn>
  </>
)