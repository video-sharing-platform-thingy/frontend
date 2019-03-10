import React from 'react'
import { VideoColumn, Player, Text, VideoTitle, RecommendationsColumn, SectionTitle, CompactVideo, Button, CompactChannel, Flex, LeftColumn } from '../components'

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
    {/* <div dangerouslySetInnerHTML={{ __html: '<iframe width="0" height="0" src="https://www.youtube.com/embed/DiVWvrt6jKw?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }} /> */}
  </>
)
