import React from 'react'
import styled from '@emotion/styled'

import Title from '@components/title/Title'
import Subtitle from '@components/subtitle/Subtitle'

import { Wrapper, Content } from './HeroTextImage.styles'

type Props = {
  padding?: 'sm' | 'md' | 'lg'
  title: string
  subtitle?: string
  children?: React.ReactNode
}

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  text-align: center;
  width: 100%;

  ${Title} {
    text-align: center;
  }
`

const HeroTextSimple = ({ padding = 'lg', title = '', subtitle = '', children }: Props) => (
  <Wrapper padding={padding}>
    <Content>
      <Header>
        <Title as="h1">{title}</Title>
        {subtitle && <Subtitle as="h2">{subtitle}</Subtitle>}
        {children}
      </Header>
    </Content>
  </Wrapper>
)

export default HeroTextSimple
