import React from 'react'
import { VideoColumn, Player, RecommendationsColumn, SectionTitle, CompactVideo, VideoChannelInfo, VideoMeta } from '../components'

export default () => (
  <>
    <VideoColumn>
      <Player />
      <VideoMeta />
      <VideoChannelInfo />
    </VideoColumn>
    <RecommendationsColumn>
      <SectionTitle>Similar videos</SectionTitle>
      {new Array(14).fill(undefined).map((_, index) => <CompactVideo key={index} />)}
    </RecommendationsColumn>
    {/* <div dangerouslySetInnerHTML={{ __html: '<iframe width="0" height="0" src="https://www.youtube.com/embed/DiVWvrt6jKw?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' }} /> */}
  </>
)
