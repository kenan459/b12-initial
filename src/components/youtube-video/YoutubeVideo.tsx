import React from 'react'
import styled from '@emotion/styled'
import { mq } from '@styles/theme'

type TYouTubeVideoLayout = 'default' | 'vertical' | 'shorts'

type TYouTubeVideoProps = {
  src: string
  title?: string
  layout?: TYouTubeVideoLayout
}

const Wrapper = styled.div<{ layout: TYouTubeVideoLayout }>`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: ${(props) => {
    switch (props.layout) {
      case 'default':
        return '56.25%'
      case 'vertical':
        return '74%'
      case 'shorts':
        return '130%'
      default:
        return '56.25%'
    }
  }};
  max-width: 100%;

  ${mq['md']} {
    padding-bottom: ${(props) => {
      switch (props.layout) {
        case 'default':
          return '56.25%'
        case 'vertical':
          return '74%'
        case 'shorts':
          return '56.25%'
        default:
          return '56.25%'
      }
    }};
    max-width: ${(props) => {
      switch (props.layout) {
        case 'default':
          return '100%'
        case 'vertical':
          return '320px'
        case 'shorts':
          return '100%'
        default:
          return '100%'
      }
    }};
  }
`

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const YouTubeVideo = ({ src, title = 'YouTube video', layout = 'default' }: TYouTubeVideoProps) => {
  return (
    <Wrapper layout={layout}>
      <Iframe
        title={title}
        width="100%"
        height="100%"
        src={src}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </Wrapper>
  )
}

export default YouTubeVideo
