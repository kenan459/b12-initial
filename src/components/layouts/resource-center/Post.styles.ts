import styled from '@emotion/styled'
import { theme, mq } from '@styles/theme'

// Components
import SectionNext from '@components/section-next/SectionNext'
import { Link } from 'gatsby'
import { Section } from '@components/section'
import HeroTextImage from '@components/hero/HeroTextImage'

const PostMeta = styled.div`
  color: ${theme.colors.text.light};
  margin: 40px 0;

  span {
    display: inline-block;
    margin: 0 5px;
    font-size: 20px;
  }
`

export const StyledSectionNext = styled(SectionNext)`
  overflow: visible; // need this for sticky social share icons
`

export const StyledHeroTextImage = styled(HeroTextImage)`
  .bubble-image-desktop {
    display: none;

    ${mq['md']} {
      display: block;
    }
  }
`

export const StyledTitle = styled.h2`
  font-size: 20px;
  line-height: 26px;
  margin: 0;

  ${mq['sm']} {
    font-size: 32px;
    line-height: 40px;
  }
`

export const PostHead = styled.div`
  padding: 0 0 30px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr;

  ${mq['md']} {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    justify-content: space-between;
    align-items: center;
  }

  ${mq['lg']} {
    grid-template-columns: 1fr 30%;
  }
`

export const PostHeadContent = styled.div``

export const PostCategory = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
    color: ${theme.colors.brand.accentDark};
  }
`

export const PostTitle = styled.h1`
  font-size: 32px;
  line-height: 38px;
  font-weight: normal;
  color: ${theme.palette.secondary.default};
  margin: 20px 0;
  font-weight: 700;

  ${mq['md']} {
    font-size: 42px;
    line-height: 50px;
  }
`

export const Subtitle = styled.h2`
  font-size: 22px;
  line-height: 28px;
  font-weight: normal;
  color: ${theme.colors.text.regular};
  margin: 20px 0;
  font-weight: 700;

  ${mq['md']} {
    font-size: 32px;
    line-height: 38px;
  }
`

export const FormTitle = styled.p`
  font-weight: 700;
`

export const PostAuthor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 30px 0;

  ${mq['md']} {
    margin-bottom: 0;
  }
`

export const PostAuthorImage = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;

  .author-image {
    border-radius: 50%;
  }
`

export const PostAuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const AuthorName = styled.p`
  font-weight: 700;
  margin: 0;
  color: ${theme.colors.text.dark};
`

export const StyledPostMeta = styled(PostMeta)`
  margin: 0;
  color: ${theme.colors.text.dark};
`

export const PostWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  ${mq['lg']} {
    gap: 80px;
    justify-content: space-between;
  }
`

export const PostFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  background: ${theme.colors.surface.background};
  padding: 30px;
  margin: 20px 0;
`

export const PostFooterImage = styled.div`
  margin-right: 20px;

  .author-image {
    border-radius: 50%;
    width: 70px;
  }
`
export const PostFooterTitle = styled.h4`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin: 0 0 8px 0 !important;

  + p {
    margin: 0;
  }
`
export const PostFooterContent = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${theme.colors.text.light};
`

export const SocialShareDesktopWrapper = styled.div`
  display: none;

  ${mq['lg']} {
    display: flex;
    position: sticky;
    top: 200px;
  }
`

export const SocialShareMobileWrapper = styled.div`
  ${mq['lg']} {
    display: none;
  }
`

export const PostBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 30px 0 10px; // Fix top and bottom spacing for titles

    a,
    a:link,
    a:visited {
      font-size: inherit;
      line-height: inherit;
    }
  }

  h2 {
    font-size: 32px;
    line-height: 38px;
  }

  p {
    font-size: 16px;
    line-height: 26px;
    color: ${theme.colors.text.dark};

    ${mq['md']} {
      font-size: 18px;
      line-height: 30px;
    }
  }

  // TODO: Fix alt text for images
  /* .img-alt-text { 
    text-align: center;
    color: #4d4d4d;
    margin-bottom: spacing('sm');
    font-size: 16px;
    line-height: 24px;
  } */

  blockquote {
    padding: 30px;
    margin: 0;

    ${mq['md']} {
      padding: 40px;
    }

    p {
      font-size: 22px;
      font-weight: 500;
      line-height: 32px;

      &:last-child {
        margin-bottom: 0;
      }

      ${mq['md']} {
        font-size: 30px;
        line-height: 44px;
      }
    }
  }

  // TODO: Fix image sizing
  img {
    width: 100%;
  }

  .gatsby-resp-image-wrapper {
    margin: 24px 0; // spacing for image wrapper
  }

  hr {
    height: 0;
    border: 0;
    border-top: 1px solid ${theme.colors.surface.border};
    width: 40%;
    margin: 35px auto;

    ${mq['md']} {
      margin-block: 70px;
    }
  }

  ul,
  ol {
    padding-left: 22px;
    margin-left: 20px; // add indentation for lists
    color: ${theme.colors.text.dark};

    li {
      font-size: 16px;
      line-height: 26px;
      color: inherit;

      ${mq['md']} {
        font-size: 18px;
        line-height: 30px;
      }
    }

    ${mq['md']} {
      margin-left: 30px;
    }
  }
`

export const ReadMoreSection = styled(Section)`
  padding: 60px 0;
  background: ${theme.colors.brand.accentDarker};

  ${mq['md']} {
    padding: 100px 0;
  }
`
