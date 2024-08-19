import styled from '@emotion/styled'
import { mq, theme } from '../../assets/theme'
import { Section, SectionSubtitle, SectionTitle } from '../../components/section'
import { ScrollToButton } from '../../components/section/SectionScrollTo.styles'

import teamPhoto from '../../images/team-photo.png'

export const Hero = styled(Section)`
  height: 65vh;
  background: #fcfcfd url(${teamPhoto}) center bottom no-repeat;
  background-size: 100% auto;

  ${mq['lg']} {
    height: 80vh;
  }
`

export const AboutText = styled(SectionSubtitle)`
  p {
    text-align: left;
    font-size: 18px;
    line-height: 30px;

    + p {
      margin-top: 20px;
    }

    ${mq['md']} {
      font-size: 18px;
      line-height: 30px;
    }
  }
`

export const SectionCounters = styled(Section)`
  z-index: 100;
  margin-bottom: -80px;

  ${mq['lg']} {
    margin-bottom: -240px;
  }

  ${ScrollToButton} {
    bottom: auto;
    top: 0;
  }
`

export const Counters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between;
`

export const Counter = styled.div`
  width: calc(100% / 3 - 30px);
  text-align: center;

  ${SectionTitle} {
    position: relative;
    margin-bottom: 30px;

    &::after {
      display: block;
      content: '';
      position: absolute;
      height: 1px;
      background: ${theme.colors.surface.borderLight};
      width: 40px;
      bottom: -10px;
      left: 50%;
      margin-left: -20px;
    }
  }
`

export const TeamPhotos = styled.div`
  margin-top: 80px;
  gap: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${mq['md']} {
    grid-template-columns: 1fr 20% 1fr;
  }

  .gatsby-image-wrapper {
    box-shadow: 0 15px 30px 0 rgb(22 14 51 / 10%);
    border-radius: 4px;

    &:nth-of-type(1) {
      grid-column: 1/3;

      ${mq['md']} {
        grid-column: 1/3;
      }
    }

    &:nth-of-type(2) {
      grid-column: 1/2;
      align-self: end;
      justify-self: start;

      ${mq['md']} {
        grid-column: 3/4;
      }
    }

    &:nth-of-type(3) {
      grid-column: 2/3;
      align-self: start;
      justify-self: end;

      ${mq['md']} {
        grid-column: 1/2;
      }
    }

    &:nth-of-type(4) {
      grid-column: 1/3;

      ${mq['md']} {
        grid-column: 2/4;
      }
    }
  }

  ${mq['md']} {
    margin-top: 120px;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 40px;

  ${mq['lg']} {
    gap: 120px;
    grid-template-columns: 40% 1fr;
  }
`

export const PersonCard = styled.div<{ href?: string }>`
  text-align: center;
  text-decoration: none;

  .person-card-image {
    border-radius: 4px;
    box-shadow: 0 15px 30px 0 rgb(22 14 51 / 10%);
    margin-bottom: 20px;
  }

  ${(props) =>
    props.as === 'a' &&
    `
    transition: all 0.15s ease-in-out;
    display: block;

    &:hover {
      transform: scale(1.03);
    }
  `}
`

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  flex-wrap: wrap;

  ${PersonCard} {
    width: calc((100% / 2) - 30px);

    ${mq['md']} {
      width: calc((100% / 3) - 30px);
    }

    ${mq['lg']} {
      width: calc((100% / 4) - 30px);
    }
  }
`

export const InvestorsWithImagesCards = styled(Cards)`
  margin-bottom: 60px;
  flex-wrap: wrap;

  ${PersonCard} {
    width: 100%;

    ${mq['md']} {
      width: calc((100% / 3) - 30px);
    }

    ${mq['lg']} {
      width: calc((100% / 5) - 30px);
    }

    .investor-logo {
      /* max-height: 40px; */
      max-width: 100%;
    }
  }
`

export const PersonTitle = styled.p`
  margin: 0 0 5px;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: ${theme.colors.text.dark};

  ${mq['md']} {
    font-size: 20px;
    line-height: 30px;
  }
`

export const PersonInfo = styled.p`
  color: ${theme.colors.text.gray};
  margin: 0;
  font-size: 14px;
  line-height: 16px;

  ${mq['md']} {
    font-size: 16px;
    line-height: 18px;
  }

  span {
    display: block;

    & + span {
      margin-top: 5px;
    }
  }
`

export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;

  ${SectionTitle} {
    text-align: left;
  }

  ${SectionSubtitle} {
    text-align: left;
  }
`

export const ContentItemTitle = styled.h2`
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
  margin: 0;

  ${mq['md']} {
    font-size: 32px;
    line-height: 40px;
  }
`

export const ContentItemTitleTertiary = styled.h3`
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  margin: 0;
`

export const ContentItemTextSubdued = styled.p`
  font-size: 16px;
  line-height: 24px;

  ${mq['md']} {
    font-size: 18px;
    line-height: 30px;
    color: ${theme.colors.text.gray};
  }
`

export const LinkUnderlined = styled.a<{ dark?: boolean }>`
  display: inline;
  text-decoration: none;
  color: ${(props) => (props.dark ? theme.colors.text.dark : theme.colors.text.gray)};
  border-bottom: 1px solid rgba(115, 110, 132, 0.3);
  transition: all 0.15s ease-in-out;

  &:hover {
    text-decoration: none;
    color: ${theme.colors.text.regular};
    border-color: ${theme.colors.text.regular};
  }
`

export const TwoColGrid = styled.div`
  display: grid;
  gap: 40px;
  margin-bottom: 15px;

  ${mq['md']} {
    grid-template-columns: repeat(2, 1fr);
  }
`
