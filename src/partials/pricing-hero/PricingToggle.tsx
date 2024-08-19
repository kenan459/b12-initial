import React from 'react'

import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

// Types
type Props = {
  yearly: boolean
  setYearlyBilling: (value: boolean) => void
}

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  gap: 24px;
  margin-bottom: 16px;

  ${mq['md']} {
    grid-template-columns: 120px 1fr 120px;
    margin-bottom: 40px;
    align-items: center;
  }
`

const Toggle = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;
  border: 0;
  background: none;
  padding: 0;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.text.regular};
  gap: 8px;
  cursor: pointer;

  &:focus,
  &:focus-visible {
    outline: 0;
  }

  ${mq['md']} {
    grid-column: 2 / 3;
  }
`

const Billing = styled.span<{ active: boolean }>`
  color: ${(props) => (props.active ? theme.colors.text.dark : theme.colors.text.regular)};
`

const ThumbTrack = styled.span`
  display: block;
  position: relative;
  width: 32px;
  height: 8px;
  background: ${theme.colors.brand.accentLightMedium};
  border-radius: 20px;
`
const Thumb = styled.span<{ active: boolean }>`
  display: block;
  position: absolute;
  top: -4px;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${theme.colors.brand.accentLight};
  transition: ${theme.transition[1]};
  ${(props) => props.active && `transform: translateX(100%)`};
`
const Note = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.text.regular};
`

export const PricingToggle = ({ yearly = false, setYearlyBilling }: Props) => {
  const handleBillingChange = () => {
    setYearlyBilling(!yearly)
  }

  return (
    <Wrapper>
      <Toggle
        aria-pressed={yearly}
        aria-label="Toggle between monthly and yearly billing"
        type="button"
        onClick={handleBillingChange}
      >
        <Billing active={!yearly}>Billed monthly</Billing>
        <ThumbTrack>
          <Thumb active={yearly} />
        </ThumbTrack>
        <Billing active={yearly}>Billed yearly</Billing>
      </Toggle>
      <Note>All prices in USD</Note>
    </Wrapper>
  )
}

export default PricingToggle
