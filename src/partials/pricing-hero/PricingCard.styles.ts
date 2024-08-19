import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'
import { motion } from 'framer-motion'
import { opacify } from '../../assets/helpers'

import { Button } from '../../components/button/Button'

export const Wrapper = styled.div<{ isPopular: boolean }>`
  border-radius: ${(props) => (props.isPopular ? '23px 23px 16px 16px' : '16px')};
  padding: 32px 24px;
  width: 100%;
  background: ${(props) =>
    props.isPopular ? theme.colors.brand.accentDarkest : theme.colors.surface.default};
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.16);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: ${theme.transition[1]};
  z-index: ${(props) => (props.isPopular ? 5 : 1)};
  ${(props) =>
    props.isPopular &&
    `
    padding-top: 48px;
  `}

  ${mq['md']} {
    padding: 48px 56px;
    box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.16);

    &:hover {
      transform: translateY(-5px);
      z-index: 10;
      box-shadow: 0px 15px 80px rgba(0, 0, 0, 0.26);
    }
  }
`

export const Popular = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: -1px;
  border-radius: 16px 16px 0 0;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.brand.accentDark};
  padding: 6px 16px;
  background: ${theme.colors.brand.accentLightMedium};

  ${mq['md']} {
    padding: 10px 48px;
  }
`

export const Title = styled.h4`
  font-size: 22px;
  line-height: 32px;
  color: ${theme.colors.brand.accentLight};
  font-weight: 700;
  margin: 0 0 4px;

  .is-popular & {
    color: ${theme.colors.text.white};
  }
`

const priceBaseStyles = css`
  font-family: ${theme.typography.heading};
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  color: ${theme.colors.text.dark};
  display: inline-flex;
  align-items: center;
  gap: 5px;
  position: relative;
  transition: ${theme.transition[1]};

  .is-popular & {
    color: ${theme.colors.text.white};
  }
`

export const PriceMonthly = styled.div`
  ${priceBaseStyles}

  .is-popular &::before {
    background: ${theme.colors.text.white};
  }

  &::before {
    display: block;
    content: '';
    position: absolute;
    left: -3px;
    height: 2px;
    top: 50%;
    transform: translateY(-50%);
    background: ${theme.colors.text.dark};
    border-radius: 4px;
    transition: ${theme.transition[1]};
    width: 0;
  }

  .is-yearly & {
    font-size: 22px;
    line-height: 32px;

    &::before {
      width: calc(100% + 6px);
    }
  }
`

export const PriceYearly = styled(motion.div)`
  ${priceBaseStyles}
  transition: none;
`

export const Period = styled.span`
  font-family: ${theme.typography.heading};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  .is-popular & {
    color: ${theme.colors.text.white};
  }
`

const baseParagraphStyles = css`
  font-family: ${theme.typography.heading};
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;

  .is-popular & {
    color: ${theme.colors.brand.accentLightMedium};
  }
`

export const Savings = styled(motion.div)`
  ${baseParagraphStyles};
  font-weight: bold;
`

export const Description = styled.p`
  ${baseParagraphStyles};
  margin: 16px 0;
`

export const Users = styled.p`
  ${baseParagraphStyles};
  margin: 0;
  font-weight: 700;
  padding: 12px 0;
  border-top: 1px solid ${theme.colors.surface.border};
  border-bottom: 1px solid ${theme.colors.surface.border};
  color: ${theme.colors.text.dark};
  width: 100%;

  .is-popular & {
    color: ${theme.colors.text.white};
    border-color: ${opacify(theme.colors.surface.border, 0.24)};
  }
`

export const StyledButton = styled(Button)`
  margin-top: 32px;

  ${mq['md']} {
    margin-top: auto;
  }
`

export const Dify = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 8px;
  color: ${theme.colors.text.dark};

  .is-popular & {
    color: ${theme.colors.text.white};
  }

  ${mq['md']} {
    margin-top: 12px;
    margin-bottom: 40px;
  }
`

export const DifyTitle = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.colors.text.dark};
  font-weight: bold;

  .is-popular & {
    color: ${theme.colors.text.white};
  }
`

export const DifyDescription = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 18px;

  .is-popular & {
    color: ${theme.colors.brand.accentLightMedium};
  }
`
