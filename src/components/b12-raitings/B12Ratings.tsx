import React from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '@styles/theme'

// Components
import Text from '@components/text/Text'
import SectionNext from '@components/section-next/SectionNext'

// Images
import BarkLogo from './images/bark-logo.inline.svg'
import ProductHuntLogo from './images/product-hunt-logo.inline.svg'
import TrustpilotLogo from './images/trustpilot-logo.inline.svg'
import StarIcon from './images/star.inline.svg'

const StyledSectionNext = styled(SectionNext)`
  padding-top: 36px;
  padding-bottom: 0px;

  ${mq['md']} {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const RatingsWrapper = styled.div``

const RatingsStarsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.small};

  ${mq['md']} {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.medium};
  }
`

const RatingsCard = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  border-radius: 8px;
  text-decoration: none;
  background: ${theme.colors.brand.accentLightest};
  padding: 10px 20px;
  justify-content: space-between;
  gap: 12px;

  &:hover,
  &:focus,
  &:active {
    outline: 0;
  }

  svg {
    height: 35px;
    width: auto;
    max-width: 100%;
  }

  ${mq['md']} {
    flex-direction: column;
  }

  ${mq['lg']} {
    flex-direction: row;
  }
`

const RatingsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${mq['md']} {
    align-items: center;
    gap: 5px;
  }

  ${mq['lg']} {
    align-items: flex-start;
  }
`

const StyledText = styled(Text)`
  margin: 0;
`

const StarsWrapper = styled.div`
  position: relative;
  font-size: 1em;
  line-height: 1;

  svg {
    width: 1.5em;
    height: auto;
  }
`
const StarsBackground = styled.div`
  white-space: nowrap;

  svg {
    fill: #d9d9d9;
  }
`
const StarsForeground = styled.div<{ rate: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ rate }) => rate}%;
  white-space: nowrap;
  overflow: hidden;

  svg {
    fill: gold;
  }
`

const Stars = ({ rate = 5, defaultRate = 5 }) => {
  const ratePercentage = (rate / defaultRate) * 100
  return (
    <StarsWrapper>
      <StarsBackground>
        {[...Array(defaultRate)].map((_, index) => (
          <StarIcon key={`star-${index}`} />
        ))}
      </StarsBackground>
      <StarsForeground rate={ratePercentage}>
        {[...Array(defaultRate)].map((_, index) => (
          <StarIcon key={`star-${index}`} />
        ))}
      </StarsForeground>
    </StarsWrapper>
  )
}

const B12Ratings = () => {
  return (
    <StyledSectionNext>
      <RatingsWrapper>
        <RatingsStarsWrapper>
          <RatingsCard
            href="https://www.bark.com/en/us/company/b12--barks-only-ai-based-website-design-company-offering-smart-websites-seo-copywriting-email-marketing-and-more/P82D2/"
            aria-label="B12 on Bark"
            target="_blank"
          >
            <BarkLogo />
            <RatingsContent>
              <Stars rate={5} />
              <StyledText small>Rating: 5/5</StyledText>
            </RatingsContent>
          </RatingsCard>
          <RatingsCard
            href="https://www.producthunt.com/products/b12/reviews"
            aria-label="B12 on Product Hunt"
            target="_blank"
          >
            <ProductHuntLogo />
            <RatingsContent>
              <Stars rate={4.8} />
              <StyledText small>Rating: 4.8/5</StyledText>
            </RatingsContent>
          </RatingsCard>
          <RatingsCard
            href="https://www.trustpilot.com/review/b12.io"
            aria-label="B12 on Truspilot"
            target="_blank"
          >
            <TrustpilotLogo />
            <RatingsContent>
              <Stars rate={4.6} />
              <StyledText small>Rating: 4.6/5</StyledText>
            </RatingsContent>
          </RatingsCard>
        </RatingsStarsWrapper>
      </RatingsWrapper>
    </StyledSectionNext>
  )
}

export default B12Ratings
