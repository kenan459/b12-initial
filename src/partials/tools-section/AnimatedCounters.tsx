import React from 'react'
import { theme, mq } from '@styles/theme'
import styled from '@emotion/styled'

// Components
import Text from '@components/text/Text'

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  pointer-events: none;

  ${mq['lg']} {
    gap: 10px;
  }
`

const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  width: 155px;
  height: auto;
  gap: 8px;
  border: 1px solid ${theme.colors.surface.border};

  ${mq['xs']} {
    width: 100%;
  }

  ${mq['sm']} {
    padding: 10px 14px;
    max-width: 180px;
  }

  ${mq['md']} {
    max-width: 165px;
  }

  ${mq['lg']} {
    max-width: 230px;
  }
`
const StyledTitle = styled.div`
  margin: 0;
  font-weight: 400;
  line-height: 20px;
  font-size: 24px;
  color: ${theme.colors.text.dark};

  ${mq['lg']} {
    line-height: 28px;
    font-size: 32px;
  }
`

const StyledText = styled(Text)`
  margin: 0;
  line-height: 16px;
  font-size: 13px;

  ${mq['lg']} {
    font-size: 16px;
    line-height: 25px;
  }
`

const SmallText = styled.span`
  color: ${theme.colors.text.light};
  font-size: 11px;
  font-weight: 400;
  text-align: left;

  ${mq['md']} {
    font-size: 12px;
  }
`

const ColoredText = styled.span`
  font-size: 16px;
  margin-left: 6px;
`

const AnimatedCounters = () => {
  return (
    <Wrapper>
      <Counter>
        <StyledText small>Website visitors</StyledText>
        <StyledTitle>
          363<ColoredText style={{ color: 'green' }}>+9%</ColoredText>
        </StyledTitle>
        <SmallText>11% higher than the median launched customer</SmallText>
      </Counter>
      <Counter>
        <StyledText small>Interactions</StyledText>
        <StyledTitle>
          22<ColoredText style={{ color: 'green' }}>+4%</ColoredText>
        </StyledTitle>
        <SmallText>3% higher than the median launched customer</SmallText>
      </Counter>
    </Wrapper>
  )
}

export default AnimatedCounters
