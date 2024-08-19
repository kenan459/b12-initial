import styled from '@emotion/styled'
import { mq, theme } from '../../../assets/theme'
import SectionNext from '../../section-next/SectionNext'
import { SectionEyebrow } from '../../section'
import Title from '../../title/Title'
import Text from '../../text/Text'
import { GatsbyImage } from 'gatsby-plugin-image'

export const SectionEyebrowStyled = styled(SectionEyebrow)`
  color: ${theme.colors.brand.accent};
  width: 100%;
  margin-bottom: 10px;
  text-align: center;

  ${mq['lg']} {
    text-align: left;
  }
`

export const CaseStudyHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  position: relative;
  z-index: 10;

  ${mq['lg']} {
    grid-template-columns: 1fr 33%;
    align-items: center;
    justify-content: space-between;
  }
`

export const CaseStudyHeaderContent = styled.div``

export const CaseStudyHeaderContentText = styled(Text)`
  text-align: center;
  margin-top: 15px;

  ${mq['sm']} {
    text-align: center;
  }

  ${mq['lg']} {
    text-align: left;
  }
`

export const CaseStudyHeaderImage = styled(GatsbyImage, {
  shouldForwardProp: (prop) => prop !== 'noBlur',
})<{ noBlur?: boolean }>`
  filter: ${({ noBlur }) => (noBlur ? 'none' : 'blur(2px)')};
  display: none;

  ${mq['lg']} {
    position: absolute;
    display: block;
    left: 65%;
    top: 50%;
    transform: translateY(-50%);
    width: 1000px;
  }
`

export const CaseStudyHeaderCustomerImage = styled.div`
  order: -1;
  max-width: 60%;
  margin: 0 auto 0;
  border-radius: 4px;
  overflow: hidden;

  ${mq['lg']} {
    display: block;
    max-width: none;
    order: 1;
  }

  .hero-img-as-customer {
    ${mq['lg']} {
      display: none; // We use hero image when customer img or logo not available and hide the hero image on desktop to avoid duplication
    }
  }
`

export const CaseStudyHero = styled(SectionNext)`
  display: flex;
  flex-direction: column;
`

export const SectionNextStyled = styled(SectionNext)`
  overflow: visible;
  padding-top: 10px;

  ${mq['md']} {
    padding-top: 30px;
  }
`

export const CaseStudy = styled.div`
  ${mq['lg']} {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
`

export const CaseStudyContent = styled.div`
  ${mq['lg']} {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`

export const SocialShareDesktopWrapper = styled.div`
  display: none;

  ${mq['lg']} {
    position: sticky;
    display: flex;
    top: 200px;
  }
`

export const SocialShareMobileWrapper = styled.div`
  ${mq['lg']} {
    display: none;
  }
`

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  ${mq['md']} {
    grid-template-columns: 30% 1fr;
    gap: 30px;
    align-items: flex-start;
  }
`

export const TextSection = styled.div``

export const AboutSectionSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${theme.colors.surface.border};
  border-radius: 4px;
  padding-top: 20px;
  margin-bottom: 20px;

  p {
    font-size: 16px;
    line-height: 24px;
  }

  ${mq['md']} {
    margin-bottom: 0;
  }
`

export const AboutSectionContent = styled.div`
  ${Title} {
    margin-bottom: 20px;
  }
  blockquote {
    margin: 30px auto;

    p {
      color: ${theme.colors.brand.accent};
      text-align: center;
      font-size: 22px;
      line-height: 32px;
      font-weight: 700;
    }
  }

  p {
    margin-bottom: 20px;
    line-height: 25px;
  }
`

export const SidebarContentItemTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`

export const SidebarContentItemText = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.palette.gray.default};

  a {
    color: ${theme.palette.gray.default};
    text-decoration: underline;
    font-size: inherit;
    line-height: inherit;
  }
`

export const SidebarContentItemProduct = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`

export const SidebarContentItem = styled.div<{ vertical?: boolean }>`
  padding: 0 20px;
  margin-bottom: 10px;
  display: flex;
  gap: 8px;

  svg {
    margin-right: 10px;
  }

  ${({ vertical }) =>
    vertical &&
    `
    flex-direction: column;
    ${SidebarContentItemText} {
      margin-left: 26px;
    }
  `}
`

export const SidebarContentProducts = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid ${theme.colors.surface.border};
  flex-direction: column;
  gap: 10px;
  background-color: ${theme.colors.brand.accentLightest};
  padding: 20px 0 10px;
`

export const CtaInline = styled.div`
  background: ${theme.colors.brand.accentLightest};
  padding: 30px;
  text-align: center;
  margin-bottom: 30px;

  ${mq['md']} {
    padding: 30px 20%;
    margin-bottom: 0;
  }

  ${Title} {
    color: ${theme.colors.brand.accent};
    margin-bottom: 10px;
  }
`

export const ResultsIntro = styled.div`
  display: flex;
  flex-direction: column;

  ${mq['lg']} {
    gap: 40px;
    flex-direction: row;
  }
`

export const Results = styled.div`
  margin: 0 0 30px;

  ${mq['lg']} {
    margin: 0;
    flex: 0 0 33%;
  }
`

export const ResultsTitle = styled(Title)`
  color: ${theme.colors.brand.accent};
  font-size: 24px;
  margin-bottom: 10px;

  ${mq['lg']} {
    font-size: 32px;
  }
`

export const ResultsStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ResultsStat = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`
