import React from 'react'
import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'

// Components
import SectionNext from '../../components/section-next/SectionNext'
import LinkWithIcon from '../../components/link-with-icon/LinkWithIcon'

// Data
import plans from '../../data/pricing/plans.yaml'

// Types
type Props = {
  slug: string
  title: string
  description: string
}

// Styles
const StyledSectionNext = styled(SectionNext)`
  background: ${theme.colors.surface.accent};
  padding-block: 56px;

  ${mq['md']} {
    padding-top: 24px;
    padding-bottom: 56px;
  }
`

const Wrapper = styled.div`
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 16px;
  padding: 24px;
  text-align: center;

  ${mq['md']} {
    padding: 32px 56px;
  }
`
const Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  margin: 0 0 8px;
`
const Description = styled.p`
  margin: 0 0 24px;
`

const PricingCardStarter = () => {
  const starterPlan = plans.filter((plan: Props) => plan.slug === 'starter')[0]

  return (
    <StyledSectionNext
      container={{
        maxWidth: '800px',
      }}
    >
      <Wrapper>
        <Title>{starterPlan.title}</Title>
        <Description>{starterPlan.description}</Description>
        <LinkWithIcon label="Get started" href="https://b12.io/signup" target="_blank" />
      </Wrapper>
    </StyledSectionNext>
  )
}

export default PricingCardStarter
