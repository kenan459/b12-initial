import React, { useState } from 'react'
import styled from '@emotion/styled'
import { mq } from '@styles/theme'

import PricingCard from './PricingCard'
import PricingToggle from './PricingToggle'

// Types
import { Props as PricingCardProps } from './PricingCard'

// Styles
const CardsWrapper = styled.div`
  display: grid;
  gap: 32px;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  ${mq['md']} {
    gap: 28px;
    grid-template-columns: repeat(3, 1fr);
  }
`

// Data
import plans from '@data/pricing/plans.yaml'

const PricingCards = () => {
  const [yearlyBilling, setYearlyBilling] = useState<boolean>(true)

  return (
    <>
      <PricingToggle yearly={yearlyBilling} setYearlyBilling={setYearlyBilling} />
      <CardsWrapper>
        {plans
          .filter((item: PricingCardProps) => item.slug !== 'starter')
          .map((item: PricingCardProps) => (
            <PricingCard key={`plan-${item.slug}`} {...item} yearly={yearlyBilling} />
          ))}
      </CardsWrapper>
    </>
  )
}

export default PricingCards
