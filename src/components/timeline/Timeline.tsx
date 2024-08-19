import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'
import React from 'react'

import Title from '../title/Title'

// Types
type Item = {
  title: string
  text: string | React.ReactNode
}

type Props = {
  items: Item[]
  parentBackground: string
  numberBg?: string
}

// Styles
const Wrapper = styled.div`
  display: grid;
  gap: 56px;
  grid-template-columns: 1fr;
  position: relative;

  ${mq['md']} {
    margin-left: 60px;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    background: ${theme.colors.surface.border};
    left: 23px;
    top: 0;
    bottom: 0;

    ${mq['md']} {
      left: calc(30% + 32px + 23px);
    }
  }
`

const Item = styled.div<{ parentBackground: string }>`
  display: grid;
  grid-template-columns: 48px 1fr;
  align-items: center;
  column-gap: 8px;
  row-gap: 20px;
  position: relative;
  z-index: 2;

  &:last-of-type {
    &::before {
      content: '';
      display: block;
      position: absolute;
      z-index: -1;
      width: 1px;
      background: ${(props) => props.parentBackground};
      left: 23px;
      top: 5px;
      bottom: 0;

      ${mq['md']} {
        top: 50%;
        left: calc(30% + 32px + 23px);
      }
    }
  }

  &:first-of-type {
    &::before {
      ${mq['md']} {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        width: 1px;
        background: ${(props) => props.parentBackground};
        top: 0;
        bottom: 50%;
        left: calc(30% + 32px + 23px);
      }
    }
  }

  ${mq['md']} {
    row-gap: 0;
    column-gap: 32px;
    grid-template-columns: 30% 48px 1fr;
  }
`

const Number = styled.div<{ nubmerBg: string }>`
  width: 48px;
  height: 48px;
  display: grid;
  place-content: center;
  background: ${(props) => props.nubmerBg};
  color: ${theme.colors.brand.accent};
  font-size: 26px;
  line-height: 26px;
  font-weight: 700;
  font-family: ${theme.typography.heading};
  border-radius: 50%;

  ${mq['md']} {
    grid-column: 2/3;
    order: 2;
  }
`

const StyledTitle = styled(Title)`
  ${mq['md']} {
    grid-column: 1/2;
    order: 1;
    text-align: right;
  }
`

const Text = styled.p`
  margin: 0;
  grid-column: 2/3;

  ${mq['md']} {
    grid-column: 3/4;
    order: 3;
    font-size: 16px;
  }
`

const TextWrapper = styled.div`
  margin: 0;
  grid-column: 2/3;

  ${mq['md']} {
    grid-column: 3/4;
    order: 3;
  }

  p {
    font-size: 16px;
  }
`

const Timeline = ({
  items,
  parentBackground = theme.colors.surface.default,
  numberBg = theme.colors.surface.default,
}: Props) => (
  <Wrapper>
    {items.map((item, idx) => (
      <Item parentBackground={parentBackground} key={`list-item-${idx}`}>
        <Number nubmerBg={numberBg}>{idx + 1}</Number>
        <StyledTitle as="h4">{item.title}</StyledTitle>
        {item.text && typeof item.text === 'string' && <Text>{item.text}</Text>}
        {item.text && React.isValidElement(item.text) && <TextWrapper>{item.text}</TextWrapper>}
      </Item>
    ))}
  </Wrapper>
)

export default Timeline
