import styled from '@emotion/styled'
import { theme, mq } from '../../assets/theme'

import Container from '../../components/container/Container'

export const Wrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;

  + section {
    padding-top: 56px;
  }
`

export const StyledContainer = styled(Container)`
  padding-inline: 0;

  ${mq['md']} {
    padding-inline: 20px;
  }
`

export const FeaturesWrapper = styled.div`
  background: ${theme.colors.surface.default};
  padding: 0 0 60px;
  width: 100%;
`

export const FeaturesContainer = styled.div`
  position: relative;
  overflow: auto;
  padding-left: 20px;

  ${mq['md']} {
    padding-left: 0;
  }
`

export const FeaturesTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  color: ${theme.colors.text.light};
  margin: 0;

  ${mq['md']} {
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: ${theme.colors.surface.border};
  }
`

export const FeaturesRow = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 140px repeat(4, 120px);

  ${mq['md']} {
    grid-template-columns: 1fr repeat(4, 140px);
  }

  ${mq['lg']} {
    grid-template-columns: 1fr repeat(4, 200px);
  }
`

export const FeaturesHead = styled(FeaturesRow)`
  background: ${theme.colors.surface.default};
  position: sticky;
  z-index: 100;
  top: 0;
  padding-top: 80px;
  overflow-x: scroll;
  align-items: end;
  padding-left: 20px;

  ${mq['md']} {
    padding-left: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

export const FeaturesGroup = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  margin: 0;
  padding: 24px 20% 0 0;
  padding-right: 20%;

  ${mq['md']} {
    font-size: 22px;
    line-height: 32px;
    padding: 54px 0 32px;
    border-bottom: 1px solid ${theme.colors.surface.border};
  }
`

export const FeaturesItem = styled.div`
  text-align: center;
  padding: 20px 10px;
  border-bottom: 1px solid ${theme.colors.surface.border};
  display: grid;
  place-content: center;

  &:first-of-type {
    text-align: left;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  svg {
    width: 16px;
  }

  ${mq['md']} {
    padding: 20px 15px;

    svg {
      width: 20px;
    }
  }
`

export const FeaturesPlan = styled.div`
  font-weight: bold;
  font-family: ${theme.typography.heading};
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.text.dark};

  ${mq['md']} {
    font-size: 18px;
    line-height: 20px;
  }

  span {
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 6px;

    ${mq['md']} {
      font-size: 18px;
    }

    span {
      font-size: 14px;
      margin-left: 4px;
      margin-top: 0;
      display: inline-block;
      color: ${theme.colors.text.regular};
    }
  }
`

export const Feature = styled.div`
  h4 {
    margin: 0;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;

    ${mq['md']} {
      display: block;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
    }
  }

  p {
    font-family: ${theme.typography.heading};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin: 8px 0 0;
    display: none;

    ${mq['md']} {
      display: block;
    }
  }
`

export const FeatureString = styled.div`
  font-family: ${theme.typography.heading};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.text.regular};

  span {
    font-size: 14px;
    line-height: 17px;
    color: ${theme.colors.text.dark};
    display: block;

    ${mq['md']} {
      font-size: 18px;
      line-height: 30px;
    }
  }
`
