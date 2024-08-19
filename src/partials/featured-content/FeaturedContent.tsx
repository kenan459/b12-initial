import React from 'react'
import styled from '@emotion/styled'
import { theme } from '../../assets/theme'

const Wrapper = styled.div`
  padding: 24px;
  background: ${theme.colors.surface.background};
`

const Title = styled.h3`
  color: ${theme.colors.brand.accent};
  margin-top: 0;
  margin-bottom: 16px;
`

const Description = styled.p`
  &:last-child {
    margin-bottom: 0;
  }
`

const FeaturedContent = ({ title, description }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default FeaturedContent
